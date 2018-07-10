import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

export const loadSvgResources = (ir: MatIconRegistry, ds: DomSanitizer) => {
  const imgDir = '../../assets';
  const iconDir = `${imgDir}/img/icon`;

  ir.addSvgIcon('portrait', ds.bypassSecurityTrustResourceUrl(`${iconDir}/头像.svg`));
  ir.addSvgIcon('avatar', ds.bypassSecurityTrustResourceUrl(`${iconDir}/user-secret.svg`));
  ir.addSvgIcon('clock', ds.bypassSecurityTrustResourceUrl(`${iconDir}/clock.svg`));
  ir.addSvgIcon('order', ds.bypassSecurityTrustResourceUrl(`${iconDir}/order-two.svg`));
  ir.addSvgIcon('message', ds.bypassSecurityTrustResourceUrl(`${iconDir}/message.svg`));
};
