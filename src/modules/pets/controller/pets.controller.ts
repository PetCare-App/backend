import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Res,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { format } from 'date-fns';
import * as fs from 'fs';
import * as PDFDocument from 'pdfkit';
import { CreatePetDto } from '../dtos/create-pet.dto';
import { UpdatePetDto } from '../dtos/update-pet.dto';
import { PetsService } from '../service/pets.service';

@Controller('pets')
export class PetsController {
  constructor(private readonly petsService: PetsService) {}

  @UsePipes(ValidationPipe)
  @Post()
  async create(@Body() createPetDto: CreatePetDto) {
    return await this.petsService.create(createPetDto);
  }

  @Get()
  async findAll() {
    return await this.petsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return await this.petsService.findById(id);
  }

  @Get(':id/pdf')
  async generatePDF(@Param('id') id: number, @Res() response) {
    try {
      const pet = await this.petsService.findById(id);

      const doc = new PDFDocument();
      doc.pipe(fs.createWriteStream('uploads/mypet.pdf'));

      const titleFontSize = 20;
      const subtitleFontSize = 16;
      const normalFontSize = 12;
      const lineGap = 5;
      const margin = 50;
      const boxMargin = 5;
      const boxPadding = 5;
      const labelBackgroundColor = '#ffffff';
      const labelBackgroundColor2 = '#fcb603';
      const opacity = 0.5;
      const imagePath =
        pet.animalType == 'Cat'
          ? 'uploads/filhotegato.jpg'
          : 'uploads/filhote.jpg';

      const currentDate = new Date();
      const formattedDate = format(currentDate, 'dd/MM/yyyy HH:mm:ss');
      const formattedBirthDate = format(pet.birthDate, 'dd/MM/yyyy');
      const curiousText =
        pet.animalType == 'Cat'
          ? 'A visão de um gato é melhor e pior do que a de um humano: é melhor porque os gatos conseguem ver mais em ambientes mais difusos, e têm uma visão esférica superior. É pior porque não conseguem ver a cor tão bem como os humanos. Os cientistas acreditam que os gatos veem a erva em tom vermelho.'
          : 'Os cães são conhecidos por sua capacidade olfativa impressionante. Seu nariz é uma ferramenta poderosa e altamente desenvolvida que desempenha um papel fundamental em sua vida diária. Você sabia que os cães têm cerca de 300 milhões de receptores olfativos em seus narizes, enquanto os humanos têm apenas cerca de 5 milhões?';

      doc
        .image(imagePath, 40, 25, { width: 70 })
        .fillColor('#444444')
        .fontSize(20)
        .text('PetCare.', 110, 57)
        .fontSize(10)
        .text(formattedDate, 80, 65, { align: 'right' })
        .moveDown();

      doc.text().moveDown();

      doc
        .fillColor('#444444')
        .fontSize(titleFontSize)
        .text('Relatório de Registro do Pet', { align: 'center' })
        .moveDown();

      // Array de campos com rótulos e valores
      const fields = [
        { label: 'Nome:', value: pet.name },
        { label: 'Espécie:', value: pet.animalType },
        { label: 'Raça:', value: pet.breed },
        { label: 'Data de Nascimento:', value: formattedBirthDate },
        { label: 'Gênero:', value: pet.gender },
        { label: 'Peso:', value: pet.weight },
      ];

      const drawFields = (
        fields: { label: string; value: string | Date | number }[],
      ) => {
        const fieldWidth = (doc.page.width - 2 * margin - 2 * boxMargin) / 3;
        const fieldHeight = normalFontSize + 2 * boxPadding;
        const lineHeight =
          Math.max(fieldHeight, doc.currentLineHeight()) + lineGap;
        const maxFieldsPerColumn = Math.floor(
          (doc.page.height - doc.y - margin - lineGap) / (2 * lineHeight),
        );
        let x = margin;
        let y = doc.y + lineGap;
        let columnIndex = 0;
        let fieldCount = 0;

        for (let i = 0; i < fields.length; i++) {
          const { label, value } = fields[i];

          if (fieldCount >= maxFieldsPerColumn) {
            // Mover para a próxima coluna
            x += fieldWidth + boxMargin;
            y = doc.y + lineGap;
            columnIndex++;
            fieldCount = 0;
          }

          if (columnIndex >= 3) {
            // Verificar se é necessário criar uma nova página para acomodar mais colunas
            doc.addPage();
            x = margin;
            y = margin;
            columnIndex = 0;
          }

          // Calcular as coordenadas x e y com base no índice da coluna
          const currentX = x + (fieldWidth + boxMargin) * columnIndex;
          const currentY = y + fieldCount * (2 * lineHeight);

          // Desenhar a caixa do rótulo
          doc
            .rect(currentX, currentY, fieldWidth, fieldHeight)
            .fillOpacity(opacity)
            .fill(labelBackgroundColor);

          doc
            .fontSize(13)
            .font('Helvetica')
            .fillColor('black')
            .text(label, currentX + boxPadding, currentY + boxPadding);

          // Desenhar a caixa do valor
          doc
            .rect(
              currentX,
              currentY + fieldHeight + lineGap,
              fieldWidth,
              fieldHeight,
            )
            .fillOpacity(opacity)
            .fill(labelBackgroundColor2);

          doc
            .fontSize(13)
            .fillColor('black')
            .font('Helvetica-Bold')
            .text(
              value.toString(),
              currentX + boxPadding,
              currentY + fieldHeight + lineGap + boxPadding,
            )
            .moveDown();

          fieldCount++;
        }
      };

      drawFields(fields);

      doc.moveDown();
      doc.fontSize(subtitleFontSize).text('Curiosidades:', { align: 'left' });

      doc.moveDown();
      doc.fontSize(normalFontSize).text(curiousText, { align: 'left' });

      // Finalizar o PDF
      doc.end();

      response.set({
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename=pet.pdf',
      });
      fs.createReadStream('uploads/mypet.pdf').pipe(response);
    } catch (error) {
      response.status(404).json({ message: 'Pet não encontrado.' });
    }
  }

  @Patch(':id')
  async update(@Param('id') id: number, @Body() updatePetDto: UpdatePetDto) {
    return await this.petsService.update(id, updatePetDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    return await this.petsService.remove(id);
  }
}
