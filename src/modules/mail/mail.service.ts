/* eslint-disable prettier/prettier */
import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MailService {
  constructor(private readonly mailerService: MailerService) {}
  
  async sendMail(email: string) {
    await this.mailerService.sendMail({
      to: email,
      from: 'petcaresenac@gmail.com',
      subject: 'Seja Bem-vindo(a) à PetCare! 🐾',
      attachments: [{
        filename: 'image-6.png',
        path: __dirname +'/assets/image-6.png',
        cid: 'logo'
      },
      {
        filename: 'image-1.png',
        path: __dirname +'/assets/image-1.png',
        cid: 'logo1'
      },
      {
        filename: 'image-2.png',
        path: __dirname +'/assets/image-2.png',
        cid: 'logo2'
      },
      {
        filename: 'image-3.png',
        path: __dirname +'/assets/image-3.png',
        cid: 'logo3'
      },
      {
        filename: 'image-4.png',
        path: __dirname +'/assets/image-4.png',
        cid: 'logo4'
      },
      {
        filename: 'image-5.png',
        path: __dirname +'/assets/image-5.png',
        cid: 'logo5'
      },
      {
        filename: 'image-7.png',
        path: __dirname +'/assets/image-7.png',
        cid: 'logo7'
      },
      {
        filename: 'image-8.png',
        path: __dirname +'/assets/image-8.png',
        cid: 'logo8'
      },
      {
        filename: 'image-9.png',
        path: __dirname +'/assets/image-9.png',
        cid: 'logo9'
      },
      {
        filename: 'image-10.png',
        path: __dirname +'/assets/image-10.png',
        cid: 'logo10'
      }],

      html: `
      <!DOCTYPE HTML PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
   <head>
      <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta name="x-apple-disable-message-reformatting">
      <title></title>
      <style type="text/css">
         @media only screen and (min-width: 620px) {
         .u-row {
         width: 600px !important;
         }
         .u-row .u-col {
         vertical-align: top;
         }
         .u-row .u-col-25 {
         width: 150px !important;
         }
         .u-row .u-col-35p17 {
         width: 211.02px !important;
         }
         .u-row .u-col-50 {
         width: 300px !important;
         }
         .u-row .u-col-64p83 {
         width: 388.98px !important;
         }
         .u-row .u-col-100 {
         width: 600px !important;
         }
         }
         @media (max-width: 620px) {
         .u-row-container {
         max-width: 100% !important;
         padding-left: 0px !important;
         padding-right: 0px !important;
         }
         .u-row .u-col {
         min-width: 320px !important;
         max-width: 100% !important;
         display: block !important;
         }
         .u-row {
         width: 100% !important;
         }
         .u-col {
         width: 100% !important;
         }
         .u-col > div {
         margin: 0 auto;
         }
         }
         body {
         margin: 0;
         padding: 0;
         }
         table,
         tr,
         td {
         vertical-align: top;
         border-collapse: collapse;
         }
         p {
         margin: 0;
         }
         .ie-container table,
         .mso-container table {
         table-layout: fixed;
         }
         * {
         line-height: inherit;
         }
         a[x-apple-data-detectors='true'] {
         color: inherit !important;
         text-decoration: none !important;
         }
         table, td { color: #000000; } #u_body a { color: #0000ee; text-decoration: underline; } @media (max-width: 480px) { #u_content_heading_2 .v-container-padding-padding { padding: 20px 10px 5px 20px !important; } #u_content_text_1 .v-container-padding-padding { padding: 5px 10px 30px 20px !important; } #u_content_heading_6 .v-container-padding-padding { padding: 40px 10px 0px !important; } #u_content_text_3 .v-container-padding-padding { padding: 0px 30px 20px !important; } #u_content_text_7 .v-container-padding-padding { padding: 0px 30px 10px !important; } #u_content_text_8 .v-container-padding-padding { padding: 0px 30px 10px !important; } #u_content_text_9 .v-container-padding-padding { padding: 0px 30px 10px !important; } #u_content_text_6 .v-container-padding-padding { padding: 0px 30px 10px !important; } #u_content_button_2 .v-container-padding-padding { padding: 30px 10px 50px !important; } #u_content_social_1 .v-container-padding-padding { padding: 40px 0px 0px 75px !important; } #u_content_text_4 .v-container-padding-padding { padding: 20px 40px !important; } #u_content_text_4 .v-text-align { text-align: center !important; } }
      </style>
   </head>
   <body class="clean-body u_body" style="margin: 0;padding: 0;-webkit-text-size-adjust: 100%;background-color: #494949;color: #000000">
      <table id="u_body" style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;min-width: 320px;Margin: 0 auto;background-color: #494949;width:100%" cellpadding="0" cellspacing="0">
         <tbody>
            <tr style="vertical-align: top">
               <td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top">
                  <div class="u-row-container" style="padding: 0px;background-color: transparent">
                     <div class="u-row" style="Margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;">
                        <div style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
                           <div class="u-col u-col-50" style="max-width: 320px;min-width: 300px;display: table-cell;vertical-align: top;">
                              <div style="background-color: #e3e8e7;height: 100%;width: 100% !important;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
                                 <table style="font-family:'Montserrat',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                                    <tbody>
                                       <tr>
                                          <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:0px;font-family:'Montserrat',sans-serif;" align="left">
                                             <table width="100%" cellpadding="0" cellspacing="0" border="0">
                                                <tr>
                                                   <td class="v-text-align" style="padding-right: 0px;padding-left: 0px;" align="center">
                                                      <img align="center" border="0" src="cid:logo" alt="image" title="image" style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: inline-block !important;border: none;height: auto;float: none;width: 100%;max-width: 265px;" width="265"/>
                                                   </td>
                                                </tr>
                                             </table>
                                          </td>
                                       </tr>
                                    </tbody>
                                 </table>
                              </div>
                           </div>
                           <div class="u-col u-col-50" style="max-width: 320px;min-width: 300px;display: table-cell;vertical-align: top;">
                              <div style="background-color: #ffffff;height: 100%;width: 100% !important;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
                                 <table id="u_content_heading_2" style="font-family:'Montserrat',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                                    <tbody>
                                       <tr>
                                          <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:30px 10px 5px 20px;font-family:'Montserrat',sans-serif;" align="left">
                                          </td>
                                       </tr>
                                    </tbody>
                                 </table>
                                 <table style="font-family:'Montserrat',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                                    <tbody>
                                       <tr>
                                          <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:0px 10px 10px 20px;font-family:'Montserrat',sans-serif;" align="left">
                                             <table height="0px" align="left" border="0" cellpadding="0" cellspacing="0" width="44%" style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;border-top: 1px solid #BBBBBB;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
                                                <tbody>
                                                   <tr style="vertical-align: top">
                                                      <td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top;font-size: 0px;line-height: 0px;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
                                                         <span>&#160;</span>
                                                      </td>
                                                   </tr>
                                                </tbody>
                                             </table>
                                          </td>
                                       </tr>
                                    </tbody>
                                 </table>
                                 <table style="font-family:'Montserrat',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                                    <tbody>
                                       <tr>
                                          <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:0px 10px 10px 20px;font-family:'Montserrat',sans-serif;" align="left">
                                             <h1 class="v-text-align" style="margin: 0px; line-height: 100%; text-align: left; word-wrap: break-word; font-family: impact,chicago; font-size: 55px; font-weight: 400;">SEJA BEM VINDO(a)!</h1>
                                          </td>
                                       </tr>
                                    </tbody>
                                 </table>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div class="u-row-container" style="padding: 0px;background-color: transparent">
                     <div class="u-row" style="Margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;">
                        <div style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
                           <div class="u-col u-col-35p17" style="max-width: 320px;min-width: 211.02px;display: table-cell;vertical-align: top;">
                              <div style="background-color: #ffffff;height: 100%;width: 100% !important;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
                                 <table id="u_content_text_1" style="font-family:'Montserrat',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                                    <tbody>
                                       <tr>
                                          <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:30px 10px 10px 20px;font-family:'Montserrat',sans-serif;" align="left">
                                             <div class="v-text-align" style="font-size: 13px; line-height: 140%; text-align: left; word-wrap: break-word;">
                                                <p style="line-height: 140%;"><span data-metadata="&lt;!--(figmeta)eyJmaWxlS2V5IjoiUk8wZTRRVGlGMmEzb2lpa1NJeUhLbSIsInBhc3RlSUQiOjE0OTE0OTc3NzksImRhdGFUeXBlIjoic2NlbmUifQo=(/figmeta)--&gt;" style="line-height: 18.2px;"></span>Queremos ajudar você a acompanhar o bem-estar e o desenvolvimento do seu pet de forma conveniente. Além disso, você poderá compartilhar essas informações com profissionais e cuidadores, garantindo que todos estejam atualizados sobre as necessidades do seu amado companheiro. </p>
                                             </div>
                                          </td>
                                       </tr>
                                    </tbody>
                                 </table>
                              </div>
                           </div>
                           <div class="u-col u-col-64p83" style="max-width: 320px;min-width: 388.98px;display: table-cell;vertical-align: top;">
                              <div style="background-color: #ffffff;height: 100%;width: 100% !important;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
                                 <table style="font-family:'Montserrat',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                                    <tbody>
                                       <tr>
                                          <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:0px;font-family:'Montserrat',sans-serif;" align="left">
                                             <table width="100%" cellpadding="0" cellspacing="0" border="0">
                                                <tr>
                                                   <td class="v-text-align" style="padding-right: 0px;padding-left: 0px;" align="center">
                                                      <img align="center" border="0" src="cid:logo5" alt="image" title="image" style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: inline-block !important;border: none;height: auto;float: none;width: 100%;max-width: 388px;" width="388"/>
                                                   </td>
                                                </tr>
                                             </table>
                                          </td>
                                       </tr>
                                    </tbody>
                                 </table>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div class="u-row-container" style="padding: 0px;background-color: transparent">
                     <div class="u-row" style="Margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;">
                        <div style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
                           <div class="u-col u-col-100" style="max-width: 320px;min-width: 600px;display: table-cell;vertical-align: top;">
                              <div style="background-color: #ffffff;height: 100%;width: 100% !important;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
                                 <table id="u_content_heading_6" style="font-family:'Montserrat',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                                    <tbody>
                                       <tr>
                                          <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:50px 10px 0px;font-family:'Montserrat',sans-serif;" align="left">
                                             <h1 class="v-text-align" style="margin: 0px; line-height: 110%; text-align: center; word-wrap: break-word; font-size: 22px; font-weight: 700;">Features</h1>
                                          </td>
                                       </tr>
                                    </tbody>
                                 </table>
                                 <table style="font-family:'Montserrat',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                                    <tbody>
                                       <tr>
                                          <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:'Montserrat',sans-serif;" align="left">
                                             <table height="0px" align="center" border="0" cellpadding="0" cellspacing="0" width="14%" style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;border-top: 1px solid #BBBBBB;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
                                                <tbody>
                                                   <tr style="vertical-align: top">
                                                      <td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top;font-size: 0px;line-height: 0px;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
                                                         <span>&#160;</span>
                                                      </td>
                                                   </tr>
                                                </tbody>
                                             </table>
                                          </td>
                                       </tr>
                                    </tbody>
                                 </table>
                                 <table id="u_content_text_3" style="font-family:'Montserrat',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                                    <tbody>
                                       <tr>
                                          <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:0px 120px 20px;font-family:'Montserrat',sans-serif;" align="left">
                                             <div class="v-text-align" style="font-size: 14px; line-height: 140%; text-align: center; word-wrap: break-word;">
                                             </div>
                                          </td>
                                       </tr>
                                    </tbody>
                                 </table>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div class="u-row-container" style="padding: 0px;background-color: transparent">
                     <div class="u-row" style="Margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;">
                        <div style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
                           <div class="u-col u-col-25" style="max-width: 320px;min-width: 150px;display: table-cell;vertical-align: top;">
                              <div style="background-color: #ffffff;height: 100%;width: 100% !important;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
                                 <table style="font-family:'Montserrat',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                                    <tbody>
                                       <tr>
                                          <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:'Montserrat',sans-serif;" align="left">
                                             <table width="100%" cellpadding="0" cellspacing="0" border="0">
                                                <tr>
                                                   <td class="v-text-align" style="padding-right: 0px;padding-left: 0px;" align="center">
                                                      <img align="center" border="0" src="cid:logo10" alt="image" title="image" style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: inline-block !important;border: none;height: auto;float: none;width: 100%;max-width: 92px;" width="92"/>
                                                   </td>
                                                </tr>
                                             </table>
                                          </td>
                                       </tr>
                                    </tbody>
                                 </table>
                                 <table style="font-family:'Montserrat',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                                    <tbody>
                                       <tr>
                                          <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:10px 10px 0px;font-family:'Montserrat',sans-serif;" align="left">
                                             <h1 class="v-text-align" style="margin: 0px; line-height: 130%; text-align: center; word-wrap: break-word; font-size: 14px; font-weight: 700;">VACINAS</h1>
                                          </td>
                                       </tr>
                                    </tbody>
                                 </table>
                                 <table style="font-family:'Montserrat',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                                    <tbody>
                                       <tr>
                                          <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:'Montserrat',sans-serif;" align="left">
                                             <table height="0px" align="center" border="0" cellpadding="0" cellspacing="0" width="36%" style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;border-top: 1px solid #BBBBBB;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
                                                <tbody>
                                                   <tr style="vertical-align: top">
                                                      <td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top;font-size: 0px;line-height: 0px;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
                                                         <span>&#160;</span>
                                                      </td>
                                                   </tr>
                                                </tbody>
                                             </table>
                                          </td>
                                       </tr>
                                    </tbody>
                                 </table>
                                 <table id="u_content_text_7" style="font-family:'Montserrat',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                                    <tbody>
                                       <tr>
                                          <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:0px 5px 10px 10px;font-family:'Montserrat',sans-serif;" align="left">
                                             <div class="v-text-align" style="font-size: 12px; line-height: 140%; text-align: center; word-wrap: break-word;">
                                             </div>
                                          </td>
                                       </tr>
                                    </tbody>
                                 </table>
                              </div>
                           </div>
                           <div class="u-col u-col-25" style="max-width: 320px;min-width: 150px;display: table-cell;vertical-align: top;">
                              <div style="background-color: #ffffff;height: 100%;width: 100% !important;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
                                 <table style="font-family:'Montserrat',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                                    <tbody>
                                       <tr>
                                          <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:'Montserrat',sans-serif;" align="left">
                                             <table width="100%" cellpadding="0" cellspacing="0" border="0">
                                                <tr>
                                                   <td class="v-text-align" style="padding-right: 0px;padding-left: 0px;" align="center">
                                                      <img align="center" border="0" src="cid:logo8" alt="image" title="image" style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: inline-block !important;border: none;height: auto;float: none;width: 100%;max-width: 86px;" width="86"/>
                                                   </td>
                                                </tr>
                                             </table>
                                          </td>
                                       </tr>
                                    </tbody>
                                 </table>
                                 <table style="font-family:'Montserrat',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                                    <tbody>
                                       <tr>
                                          <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:10px 10px 0px;font-family:'Montserrat',sans-serif;" align="left">
                                             <h1 class="v-text-align" style="margin: 0px; line-height: 130%; text-align: center; word-wrap: break-word; font-size: 14px; font-weight: 700;">CUIDADOS</h1>
                                          </td>
                                       </tr>
                                    </tbody>
                                 </table>
                                 <table style="font-family:'Montserrat',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                                    <tbody>
                                       <tr>
                                          <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:'Montserrat',sans-serif;" align="left">
                                             <table height="0px" align="center" border="0" cellpadding="0" cellspacing="0" width="36%" style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;border-top: 1px solid #BBBBBB;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
                                                <tbody>
                                                   <tr style="vertical-align: top">
                                                      <td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top;font-size: 0px;line-height: 0px;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
                                                         <span>&#160;</span>
                                                      </td>
                                                   </tr>
                                                </tbody>
                                             </table>
                                          </td>
                                       </tr>
                                    </tbody>
                                 </table>
                                 <table id="u_content_text_8" style="font-family:'Montserrat',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                                    <tbody>
                                       <tr>
                                          <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:0px 5px 10px 10px;font-family:'Montserrat',sans-serif;" align="left">
                                             <div class="v-text-align" style="font-size: 12px; line-height: 140%; text-align: center; word-wrap: break-word;">
                                             </div>
                                          </td>
                                       </tr>
                                    </tbody>
                                 </table>
                              </div>
                           </div>
                           <div class="u-col u-col-25" style="max-width: 320px;min-width: 150px;display: table-cell;vertical-align: top;">
                              <div style="background-color: #ffffff;height: 100%;width: 100% !important;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
                                 <table style="font-family:'Montserrat',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                                    <tbody>
                                       <tr>
                                          <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:'Montserrat',sans-serif;" align="left">
                                             <table width="100%" cellpadding="0" cellspacing="0" border="0">
                                                <tr>
                                                   <td class="v-text-align" style="padding-right: 0px;padding-left: 0px;" align="center">
                                                      <img align="center" border="0" src="cid:logo7" alt="image" title="image" style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: inline-block !important;border: none;height: auto;float: none;width: 100%;max-width: 86px;" width="86"/>
                                                   </td>
                                                </tr>
                                             </table>
                                          </td>
                                       </tr>
                                    </tbody>
                                 </table>
                                 <table style="font-family:'Montserrat',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                                    <tbody>
                                       <tr>
                                          <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:10px 10px 0px;font-family:'Montserrat',sans-serif;" align="left">
                                             <h1 class="v-text-align" style="margin: 0px; line-height: 130%; text-align: center; word-wrap: break-word; font-size: 14px; font-weight: 700;">SERVIÇOS</h1>
                                          </td>
                                       </tr>
                                    </tbody>
                                 </table>
                                 <table style="font-family:'Montserrat',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                                    <tbody>
                                       <tr>
                                          <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:'Montserrat',sans-serif;" align="left">
                                             <table height="0px" align="center" border="0" cellpadding="0" cellspacing="0" width="36%" style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;border-top: 1px solid #BBBBBB;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
                                                <tbody>
                                                   <tr style="vertical-align: top">
                                                      <td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top;font-size: 0px;line-height: 0px;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
                                                         <span>&#160;</span>
                                                      </td>
                                                   </tr>
                                                </tbody>
                                             </table>
                                          </td>
                                       </tr>
                                    </tbody>
                                 </table>
                                 <table id="u_content_text_9" style="font-family:'Montserrat',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                                    <tbody>
                                       <tr>
                                          <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:0px 5px 10px 10px;font-family:'Montserrat',sans-serif;" align="left">
                                             <div class="v-text-align" style="font-size: 12px; line-height: 140%; text-align: center; word-wrap: break-word;">
                                             </div>
                                          </td>
                                       </tr>
                                    </tbody>
                                 </table>
                              </div>
                           </div>
                           <div class="u-col u-col-25" style="max-width: 320px;min-width: 150px;display: table-cell;vertical-align: top;">
                              <div style="background-color: #ffffff;height: 100%;width: 100% !important;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
                                 <table style="font-family:'Montserrat',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                                    <tbody>
                                       <tr>
                                          <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:'Montserrat',sans-serif;" align="left">
                                             <table width="100%" cellpadding="0" cellspacing="0" border="0">
                                                <tr>
                                                   <td class="v-text-align" style="padding-right: 0px;padding-left: 0px;" align="center">
                                                      <img align="center" border="0" src="cid:logo9" alt="image" title="image" style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: inline-block !important;border: none;height: auto;float: none;width: 100%;max-width: 88px;" width="88"/>
                                                   </td>
                                                </tr>
                                             </table>
                                          </td>
                                       </tr>
                                    </tbody>
                                 </table>
                                 <table style="font-family:'Montserrat',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                                    <tbody>
                                       <tr>
                                          <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:10px 10px 0px;font-family:'Montserrat',sans-serif;" align="left">
                                             <h1 class="v-text-align" style="margin: 0px; line-height: 130%; text-align: center; word-wrap: break-word; font-size: 14px; font-weight: 700;">RELATÓRIO</h1>
                                          </td>
                                       </tr>
                                    </tbody>
                                 </table>
                                 <table style="font-family:'Montserrat',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                                    <tbody>
                                       <tr>
                                          <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:'Montserrat',sans-serif;" align="left">
                                             <table height="0px" align="center" border="0" cellpadding="0" cellspacing="0" width="36%" style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;border-top: 1px solid #BBBBBB;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
                                                <tbody>
                                                   <tr style="vertical-align: top">
                                                      <td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top;font-size: 0px;line-height: 0px;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
                                                         <span>&#160;</span>
                                                      </td>
                                                   </tr>
                                                </tbody>
                                             </table>
                                          </td>
                                       </tr>
                                    </tbody>
                                 </table>
                                 <table id="u_content_text_6" style="font-family:'Montserrat',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                                    <tbody>
                                       <tr>
                                          <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:0px 5px 10px 10px;font-family:'Montserrat',sans-serif;" align="left">
                                             <div class="v-text-align" style="font-size: 12px; line-height: 140%; text-align: center; word-wrap: break-word;">
                                             </div>
                                          </td>
                                       </tr>
                                    </tbody>
                                 </table>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div class="u-row-container" style="padding: 0px;background-color: transparent">
                     <div class="u-row" style="Margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;">
                        <div style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
                           <div class="u-col u-col-100" style="max-width: 320px;min-width: 600px;display: table-cell;vertical-align: top;">
                              <div style="background-color: #ffffff;height: 100%;width: 100% !important;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
                                 <table id="u_content_button_2" style="font-family:'Montserrat',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                                    <tbody>
                                       <tr>
                                          <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:20px 10px 50px;font-family:'Montserrat',sans-serif;" align="left">
                                             <div class="v-text-align" align="center">
                                                <a href="https://petcare-online.firebaseapp.com" target="_blank" class="v-button" style="box-sizing: border-box;display: inline-block;font-family:'Montserrat',sans-serif;text-decoration: none;-webkit-text-size-adjust: none;text-align: center;color: #FFFFFF; background-color: #000000; border-radius: 20px;-webkit-border-radius: 20px; -moz-border-radius: 20px; width:auto; max-width:100%; overflow-wrap: break-word; word-break: break-word; word-wrap:break-word; mso-border-alt: none;font-size: 10px;">
                                                <span style="display:block;padding:10px 25px;line-height:120%;"><span style="line-height: 12px;">SAIBA MAIS</span></span>
                                                </a>
                                             </div>
                                          </td>
                                       </tr>
                                    </tbody>
                                 </table>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div class="u-row-container" style="padding: 0px;background-color: transparent">
                     <div class="u-row" style="Margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;">
                        <div style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
                           <div class="u-col u-col-100" style="max-width: 320px;min-width: 600px;display: table-cell;vertical-align: top;">
                              <div style="background-color: #e3e8e7;height: 100%;width: 100% !important;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
                                 <table id="u_content_social_1" style="font-family:'Montserrat',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                                    <tbody>
                                       <tr>
                                          <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:40px 10px 10px 30px;font-family:'Montserrat',sans-serif;" align="left">
                                             <div align="left">
                                                <div style="display: table; max-width:167px;">
                                                   <table align="left" border="0" cellspacing="0" cellpadding="0" width="32" height="32" style="width: 32px !important;height: 32px !important;display: inline-block;border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;margin-right: 10px">
                                                      <tbody>
                                                         <tr style="vertical-align: top">
                                                            <td align="left" valign="middle" style="word-break: break-word;border-collapse: collapse !important;vertical-align: top">
                                                               <a href="#" title="Facebook" target="_blank">
                                                               <img src="cid:logo1" alt="Facebook" title="Facebook" width="32" style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: block !important;border: none;height: auto;float: none;max-width: 32px !important">
                                                               </a>
                                                            </td>
                                                         </tr>
                                                      </tbody>
                                                   </table>
                                                   <table align="left" border="0" cellspacing="0" cellpadding="0" width="32" height="32" style="width: 32px !important;height: 32px !important;display: inline-block;border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;margin-right: 10px">
                                                      <tbody>
                                                         <tr style="vertical-align: top">
                                                            <td align="left" valign="middle" style="word-break: break-word;border-collapse: collapse !important;vertical-align: top">
                                                               <a href="#" title="Twitter" target="_blank">
                                                               <img src="cid:logo2" alt="Twitter" title="Twitter" width="32" style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: block !important;border: none;height: auto;float: none;max-width: 32px !important">
                                                               </a>
                                                            </td>
                                                         </tr>
                                                      </tbody>
                                                   </table>
                                                   <table align="left" border="0" cellspacing="0" cellpadding="0" width="32" height="32" style="width: 32px !important;height: 32px !important;display: inline-block;border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;margin-right: 10px">
                                                      <tbody>
                                                         <tr style="vertical-align: top">
                                                            <td align="left" valign="middle" style="word-break: break-word;border-collapse: collapse !important;vertical-align: top">
                                                               <a href="#" title="LinkedIn" target="_blank">
                                                               <img src="cid:logo4" alt="LinkedIn" title="LinkedIn" width="32" style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: block !important;border: none;height: auto;float: none;max-width: 32px !important">
                                                               </a>
                                                            </td>
                                                         </tr>
                                                      </tbody>
                                                   </table>
                                                   <table align="left" border="0" cellspacing="0" cellpadding="0" width="32" height="32" style="width: 32px !important;height: 32px !important;display: inline-block;border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;margin-right: 0px">
                                                      <tbody>
                                                         <tr style="vertical-align: top">
                                                            <td align="left" valign="middle" style="word-break: break-word;border-collapse: collapse !important;vertical-align: top">
                                                               <a href="#" title="Instagram" target="_blank">
                                                               <img src="cid:logo3" alt="Instagram" title="Instagram" width="32" style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: block !important;border: none;height: auto;float: none;max-width: 32px !important">
                                                               </a>
                                                            </td>
                                                         </tr>
                                                      </tbody>
                                                   </table>
                                                </div>
                                             </div>
                                          </td>
                                       </tr>
                                    </tbody>
                                 </table>
                                 <table id="u_content_text_4" style="font-family:'Montserrat',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                                    <tbody>
                                       <tr>
                                          <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:10px 150px 25px 30px;font-family:'Montserrat',sans-serif;" align="left">
                                             <div class="v-text-align" style="font-size: 13px; line-height: 170%; text-align: left; word-wrap: break-word;">
                                                <p style="line-height: 170%;">Confira mais informações na nossa página oficial.</p>
                                             </div>
                                          </td>
                                       </tr>
                                    </tbody>
                                 </table>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </td>
            </tr>
         </tbody>
      </table>
   </body>
</html>      
          `
    });
  }

  async sendMailVaccine(email: string, name: string, vaccines: string, date: string, petName: string) {
    await this.mailerService.sendMail({
      to: email,
      from: 'petcaresenac@gmail.com',
      subject: `PetCare Informa! 🐾`,
      html: `<div style="background-color: pink; height: auto; padding: 3px"><h2 style="font-family: Arial; color: #0e1a75; font-size: 24px; font-weight: bold; text-align: center;">Importante: Atualização de Cadastro 🔔</h2></div><p style="font-family: Arial; color: #0e1a75; font-size: 16px;">Olá, ${name} uma nova vacina foi criada para o seu pet na plataforma.</p><p style="font-family: Arial; color: #0e1a75; font-size: 16px;">Vacina: ${vaccines}</p><p style="font-family: Arial; color: #0e1a75; font-size: 16px;">Data: ${date}</p><p style="font-family: Arial; color: #0e1a75; font-size: 16px;">Nome do Pet: ${petName}</p><div style="font-family: Arial ;font-size: 16px; color: #0e1a75; text-align: center; background-color: #ffe3d1; height: auto;"><p style="text-align: center; padding: 5px"><b>Equipe PetCare 🐶🐱</b><p></div>`
    });
  }

  async sendMailVaccineUpdate(email: string, name: string, vaccines: string, date: string, petName: string) {
    await this.mailerService.sendMail({
      to: email,
      from: 'petcaresenac@gmail.com',
      subject: `PetCare Informa! 🐾`,
      html: `<div style="background-color: pink; height: auto; padding: 3px"><h2 style="font-family: Arial; color: #0e1a75; font-size: 24px; font-weight: bold; text-align: center;">Importante: Atualização de Cadastro 🔔</h2></div><p style="font-family: Arial; color: #0e1a75; font-size: 16px;">Olá, ${name} um registro de vacina foi atualizado.</p><p style="font-family: Arial; color: #0e1a75; font-size: 16px;">Vacina: ${vaccines}</p><p style="font-family: Arial; color: #0e1a75; font-size: 16px;">Data: ${date}</p><p style="font-family: Arial; color: #0e1a75; font-size: 16px;">Nome do Pet: ${petName}</p><div style="font-family: Arial ;font-size: 16px; color: #0e1a75; text-align: center; background-color: #ffe3d1; height: auto;"><p style="text-align: center; padding: 5px"><b>Equipe PetCare 🐶🐱</b><p></div>`
    });
  }
}
