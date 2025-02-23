import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Product {
  image: string;
  name: string;
  description: string;
  rating: number;
  link: string;
  gallery: string[];
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  template: `<h1>Hello, {{kaspi-shop}}</h1>`,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  products: Product[] = [
    { 
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h32/h70/84378448199710.jpg?format=gallery-medium',
      name: 'iPhone 13',
      description:'Apple iPhone 13  дисплей 6.1 дюйма Super Retina XDR', 
      rating: 5,
      link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-chernyi-102298404/?c=750000000',
      gallery: [
        'https://resources.cdn-kaspi.kz/img/m/p/h35/h8f/84378448232478.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h3d/h8e/64208874405918.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hfe/h17/64208876634142.jpg?format=gallery-medium',
      ]
    },
    {
      image:'https://resources.cdn-kaspi.kz/img/m/p/h1d/h8a/68227847782430.jpg?format=gallery-medium',
      name: 'Клубника в шоколаде',
      description: 'Mon Marui Клубника в шоколаде 30 штук 21х26 см',
      rating: 5,
      link: 'https://kaspi.kz/shop/p/mon-marui-klubnika-v-shokolade-30-shtuk-21h26-sm-108582448/?c=750000000',
      gallery: [
        'https://resources.cdn-kaspi.kz/img/m/p/h1d/h8a/68227847782430.jpg?format=gallery-medium',
      ]
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hb5/hc5/86078683545630.jpg?format=gallery-medium',
      name: 'Смарт часы Huawei',
      description: 'Смарт-часы Huawei Watch Fit 3 серебристый-белый-белый',
      rating: 5,
      link: 'https://kaspi.kz/shop/p/huawei-watch-fit-3-serebristyi-belyi-belyi-119668957/?c=750000000',
      gallery : [
        'https://resources.cdn-kaspi.kz/img/m/p/h72/h79/86078683578398.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hb8/h78/86079356928030.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/he1/h4f/86079356993566.jpg?format=gallery-medium'
      ]
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h5a/h99/80296739766302.jpg?format=preview-large',
      name: 'Заколка краб',
      description: 'Заколка краб 9 шт',
      rating: 5,
      link: 'https://kaspi.kz/shop/p/zakolka-krab-9-sht-109989625/?c=750000000',
      gallery:[
        'https://resources.cdn-kaspi.kz/img/m/p/h5a/h99/80296739766302.jpg?format=gallery-medium'
      ]
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p18/p38/3402331.jpeg?format=gallery-medium',
      name: 'Наушники Apple AirPods Max 2 ',
      description: 'Наушники Apple AirPods Max 2 фиолетовый',
      rating: 5,
      link: 'https://kaspi.kz/shop/p/apple-airpods-max-2-fioletovyi-128589567/?c=750000000',
      gallery: [
        'https://resources.cdn-kaspi.kz/img/m/p/p2b/p62/3531965.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p66/p16/3402329.jpeg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p55/p42/3402334.jpeg?format=gallery-medium'
      ]
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h56/ha0/85794225684510.jpg?format=preview-large',
      name: 'Детская кровать ',
      description: 'Детская кровать PRESTIGE MEBEL 0100, бежевый',
      rating: 5,
      link: 'https://kaspi.kz/shop/p/detskaja-krovat-prestige-mebel-0100-bezhevyi-116847716/?c=750000000',
      gallery: [
        'https://resources.cdn-kaspi.kz/img/m/p/h0b/h31/86371424927774.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hc2/h79/86371425026078.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hcf/hd6/86371425058846.jpg?format=gallery-medium'
      ]
    }, 
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h1b/hd6/64377056231454.jpg?format=preview-large',
      name: 'Зарядное устройство ',
      description: 'Зарядное устройство Apple 18W USB-C Power Adapter USB Type-C белый',
      rating: 5,
      link: 'https://kaspi.kz/shop/p/apple-18w-usb-c-power-adapter-usb-type-c-belyi-102743952/?c=750000000',
      gallery: [
        'https://resources.cdn-kaspi.kz/img/m/p/h93/h72/64377059409950.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h16/h93/64377062064158.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hda/h07/80523585847326.png?format=gallery-medium'
      ]
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h4b/hd8/87059455311902.png?format=preview-large',
      name: 'Кабель',
      description: 'Кабель Apple Lightning (M), USB TypeC (M) белый',
      rating: 4,
      link: 'https://kaspi.kz/shop/p/kabel-apple-lightning-m-usb-typec-m-belyi-40500508/?c=750000000',
      gallery: [
        'https://resources.cdn-kaspi.kz/img/m/p/h8d/h64/87059455344670.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h0a/hf3/87059455410206.png?format=gallery-medium'
      ]
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h42/h78/82920434892830.jpg?format=preview-large',
      name: 'Чехол',
      description: 'Чехол NRS1708 розовый',
      rating: 5,
      link: 'https://kaspi.kz/shop/p/nrs1708-rozovyi-112638500/?c=750000000',
      gallery: [
        'https://resources.cdn-kaspi.kz/img/m/p/h42/h78/82920434892830.jpg?format=gallery-medium'
      ]
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h77/hf8/84887264624670.jpg?format=preview-large',
      name: 'Чехол',
      description: 'Чехол Для Apple iPhone 15 голубой',
      rating: 5,
      link: 'https://kaspi.kz/shop/p/dlja-apple-iphone-15-goluboi-115884835/?c=750000000',
      gallery: [
        'https://resources.cdn-kaspi.kz/img/m/p/h77/hf8/84887264624670.jpg?format=gallery-medium'
      ]
    }
  ];
  shareOnWhatsApp(link: string) {
    window.open(`https://wa.me/?text=${encodeURIComponent(link)}`, '_blank');
  }

  shareOnTelegram(link: string) {
    window.open(`https://t.me/share/url?url=${encodeURIComponent(link)}`, '_blank');
  }
}