import { Injectable,Inject} from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common'

export interface TypingSEO {
  title?: string;
  titleSuffix?: string;
  description?: string;
  image?: string;
  keywords?: string;
  url?: string;
}
export interface TypingProperty {
  property: string;
  itemprop?: string;
  content: string;
}
export interface TypingName {
  name: string;
  itemprop?: string;
  content: string;
}

@Injectable()
export class SeoService {

  baseUrl: string = 'https://www.knoxpo.com/';

  constructor(@Inject(DOCUMENT) private dom) { }
  setCanonicalURL(url:any) {
    const canURL = url == undefined ? this.dom.URL : url;
    const link: HTMLLinkElement = this.dom.createElement('link');
    link.setAttribute('rel', 'canonical');
    this.dom.head.appendChild(link);
    link.setAttribute('href', canURL);
  }

}





