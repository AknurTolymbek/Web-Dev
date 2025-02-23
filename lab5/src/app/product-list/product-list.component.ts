import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Product } from '../products';
import { ProductItemComponent } from '../product-item/product-item.component';

@Component({
  selector: 'app-product-list',
  imports: [ProductItemComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})

export class ProductListComponent implements OnChanges {
  products: Product[] = [
    {
      id: 1,
      category: 'Devices',
      name: 'iPhone 13',
      description: 'Apple iPhone 13  дисплей 6.1 дюйма Super Retina XDR',
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h32/h70/84378448199710.jpg?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-chernyi-102298404/?c=750000000',
      likes: 0
    },
    {
      id: 2,
      category: 'Beauty',
      name: 'Заколка краб',
      description: 'Заколка краб 9 шт',
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h5a/h99/80296739766302.jpg?format=preview-large',
      link: 'https://kaspi.kz/shop/p/zakolka-krab-9-sht-109989625/?c=750000000',
      likes: 0
    },
    {
      id: 3,
      category: 'For kids',
      name: 'Детская кровать',
      description: 'Детская кровать PRESTIGE MEBEL 0100, бежевый',
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h56/ha0/85794225684510.jpg?format=preview-large',
      link: 'https://kaspi.kz/shop/p/detskaja-krovat-prestige-mebel-0100-bezhevyi-116847716/?c=750000000',
      likes: 0
    },
    {
      id: 4,
      category: 'Devices',
      name: 'Смарт часы Huawei',
      description: 'Смарт-часы Huawei Watch Fit 3 серебристый-белый-белый',
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hb5/hc5/86078683545630.jpg?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/huawei-watch-fit-3-serebristyi-belyi-belyi-119668957/?c=750000000',
      likes: 0
    },
    {
      id: 5,
      category: 'Devices',
      name: 'Наушники Apple AirPods Max 2',
      description: 'Наушники Apple AirPods Max 2 фиолетовый',
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p18/p38/3402331.jpeg?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/apple-airpods-max-2-fioletovyi-128589567/?c=750000000',
      likes: 0
    },
    {
      id: 6,
      category: 'For kids',
      name: 'Сок ФрутоНяня ',
      description: 'Сок ФрутоНяня яблоко, шиповник с 5 месяцев 200 мл 1 шт',
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/haf/h55/64126736171038.jpg?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/sok-frutonjanja-jabloko-shipovnik-s-5-mesjatsev-200-ml-1-sht-100974874/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_smartphones_v2&gbraid=0AAAAAC7-v7hiyNNAqEv0knhxDXiTrGLtE&gclid=EAIaIQobChMIuJWFxKLZiwMVOWmRBR115Q3SEAAYASAAEgLL1fD_BwE',
      likes: 0
    },
    {
      id: 7,
      category: 'For kids',
      name: 'Мягкая игрушка ',
      description: 'Мягкая игрушка браслет Капибара, высота 15 см, коричневый',
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h91/h99/84787913130014.jpg?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/mjagkaja-igrushka-braslet-kapibara-vysota-15-sm-korichnevyi-115685357/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_smartphones_v2&gbraid=0AAAAAC7-v7hiyNNAqEv0knhxDXiTrGLtE&gclid=EAIaIQobChMIuJWFxKLZiwMVOWmRBR115Q3SEAAYASAAEgLL1fD_BwE',
      likes: 0
    },
    {
      id: 8,
      category: 'Beauty',
      name: 'масло для тела ',
      description: 'The Act Твердое масло для тела кокосовое 170 мл',
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pcc/pc0/1819849.png?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/the-act-tverdoe-maslo-dlja-tela-kokosovoe-170-ml-104403423/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_smartphones_v2&gbraid=0AAAAAC7-v7hiyNNAqEv0knhxDXiTrGLtE&gclid=EAIaIQobChMIuJWFxKLZiwMVOWmRBR115Q3SEAAYASAAEgLL1fD_BwE',
      likes: 0
    },
    {
      id: 9,
      category: 'For kids',
      name: 'Набор игрушек для купания',
      description: 'Набор игрушек для купания A-Toys Черепашки DB2022, мультиколор',
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hf3/h7c/66402389229598.jpg?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/nabor-igrushek-dlja-kupanija-a-toys-cherepashki-db2022-mul-tikolor-107840242/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_smartphones_v2&gbraid=0AAAAAC7-v7hiyNNAqEv0knhxDXiTrGLtE&gclid=EAIaIQobChMIuJWFxKLZiwMVOWmRBR115Q3SEAAYASAAEgLL1fD_BwE',
      likes: 0
    },
    {
      id: 10,
      category: 'Beauty',
      name: 'крем для рук ',
      description: 'The Act Ламеллярный крем для рук увлажняющий 65 мл',
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p8e/pa8/13353946.jpg?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/the-act-lamelljarnyi-krem-dlja-ruk-uvlazhnjajuschii-65-ml-106516388/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_smartphones_v2&gbraid=0AAAAAC7-v7hiyNNAqEv0knhxDXiTrGLtE&gclid=EAIaIQobChMIuJWFxKLZiwMVOWmRBR115Q3SEAAYASAAEgLL1fD_BwE',
      likes: 0
    },
    {
      id: 11,
      category: 'Household',
      name: 'Пылесос',
      description: 'Пылесос Deerma DX700 белый',
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hdb/h2f/63803859566622.jpg?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/deerma-dx700-belyi-3701383/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_smartphones_v2&gbraid=0AAAAAC7-v7hiyNNAqEv0knhxDXiTrGLtE&gclid=EAIaIQobChMIuJWFxKLZiwMVOWmRBR115Q3SEAAYASAAEgLL1fD_BwE',
      likes: 0
    },
    {
      id: 12,
      category: 'Household',
      name: 'Соковыжималка ',
      description: 'Соковыжымалка ASELiSA AL-627',
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h63/h71/82046874681374.jpg?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/sokovyzhymalka-aselisa-al-627-111885198/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_smartphones_v2&gbraid=0AAAAAC7-v7hiyNNAqEv0knhxDXiTrGLtE&gclid=EAIaIQobChMIuJWFxKLZiwMVOWmRBR115Q3SEAAYASAAEgLL1fD_BwE',
      likes: 0
    },
    {
      id: 13,
      category: 'Devices',
      name: 'Зарядное устройство ',
      description: 'Зарядное устройство Apple 18W USB-C Power Adapter USB Type-C белый',
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h1b/hd6/64377056231454.jpg?format=preview-large',
      link: 'https://kaspi.kz/shop/p/apple-18w-usb-c-power-adapter-usb-type-c-belyi-102743952/?c=750000000',
      likes: 0
    },
    {
      id: 14,
      category: 'Household',
      name: 'Кровать',
      description: 'Кровать Mod Beds Вертикаль 1 двуспальная, 180x200 см (с матрасом, без подъёмного механизма) серый',
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h9d/h56/86967946379294.jpg?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/mod-beds-vertikal-1-dvuspal-naja-180x200-sm-s-matrasom-bez-pod-jomnogo-mehanizma-seryi-106051867/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_smartphones_v2&gbraid=0AAAAAC7-v7hiyNNAqEv0knhxDXiTrGLtE&gclid=EAIaIQobChMIuJWFxKLZiwMVOWmRBR115Q3SEAAYASAAEgLL1fD_BwE',
      likes: 0
    },
    {
      id: 15,
      category: 'Beauty',
      name: 'Косметичка',
      description: 'Косметичка полиэстер 10.5X17 см',
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hc8/h42/86724211343390.jpg?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/kosmetichka-poliester-10-5x17-sm-109126670/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_smartphones_v2&gbraid=0AAAAAC7-v7hiyNNAqEv0knhxDXiTrGLtE&gclid=EAIaIQobChMIuJWFxKLZiwMVOWmRBR115Q3SEAAYASAAEgLL1fD_BwE',
      likes: 0
    },
    {
      id: 16,
      category: 'Household',
      name: 'Туалетный столик ',
      description: 'Туалетный столик Mebellion White Mix 100x45x86 см, ЛДСП, металл, белый',
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h40/h16/64427842699294.jpg?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/tualetnyi-stolik-mebellion-white-mix-100x45x86-sm-ldsp-metall-belyi-106743816/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_smartphones_v2&gbraid=0AAAAAC7-v7hiyNNAqEv0knhxDXiTrGLtE&gclid=EAIaIQobChMIuJWFxKLZiwMVOWmRBR115Q3SEAAYASAAEgLL1fD_BwE',
      likes: 0
    },
    {
      id: 17,
      category: 'Household',
      name: 'Журнальный столик',
      description: 'Журнальный столик Lounge, 100x50x55 см, черный',
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hb4/hd2/85613683572766.jpg?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/zhurnal-nyi-stolik-lounge-100x50x55-sm-chernyi-118033748/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_smartphones_v2&gbraid=0AAAAAC7-v7hiyNNAqEv0knhxDXiTrGLtE&gclid=EAIaIQobChMIuJWFxKLZiwMVOWmRBR115Q3SEAAYASAAEgLL1fD_BwE',
      likes: 0
    },
    {
      id: 18,
      category: 'Devices',
      name: 'Apple MacBook Air 13',
      description: 'Apple MacBook Air 13 2022 13,6" / 8 ГБ / SSD 256 ГБ / macOS / MLXW3',
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hf4/h52/64509322919966.jpg',
      link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-2022-13-6-8-gb-ssd-256-gb-macos-mlxw3-105933794/',
      likes: 0
    },
    {
      id: 19,
      category: 'Beauty',
      name: 'крем-спрей',
      description: 'Ollin Professional Perfect Hair 15 в 1 крем-спрей 250 мл',
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p3c/pb5/21586295.jpg?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/ollin-professional-perfect-hair-15-v-1-krem-sprei-250-ml-100008645/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_smartphones_v2&gbraid=0AAAAAC7-v7hiyNNAqEv0knhxDXiTrGLtE&gclid=EAIaIQobChMIuJWFxKLZiwMVOWmRBR115Q3SEAAYASAAEgLL1fD_BwE',
      likes: 0
    },
    {
      id: 20,
      category: 'For kids',
      name: 'Мягкая игрушка ',
      description: 'Мягкая игрушка Музыкальная дышащая выдра , высота 30 см, серый',
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pc3/pa6/1416022.jpg?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/mjagkaja-igrushka-muzykal-naja-dyshaschaja-vydra-vysota-30-sm-seryi-128101939/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_smartphones_v2&gbraid=0AAAAAC7-v7hiyNNAqEv0knhxDXiTrGLtE&gclid=EAIaIQobChMIuJWFxKLZiwMVOWmRBR115Q3SEAAYASAAEgLL1fD_BwE',
      likes: 0
    },
  ];

  @Input() currentCategory!: string;
  categoryProducts: Product[] = [];
  showDefault: boolean = true;

  remove(id: number) {
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].id == id) {
        this.products.splice(i, 1);
        break;
      }
    }

    for (let i = 0; i < this.categoryProducts.length; i++) {
      if (this.categoryProducts[i].id == id) {
        this.categoryProducts.splice(i, 1);
        return;
      }
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.currentCategory === undefined || this.currentCategory === '') {
      this.showDefault = true;
      return;
    }

    this.categoryProducts.length = 0;

    for (let product of this.products) {
      if (product.category === this.currentCategory) {
        this.categoryProducts.push(product);
      }
    }
    
    this.showDefault = false;
  }
}