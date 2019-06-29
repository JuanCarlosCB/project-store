import { Item } from '../entities/item.model';

export const ITEMS: Item[] = [{
  'id': 1,
  'name' : 'NVIDIA GeForce GTX 1060 - ASUS DUAL',
  'description' : '6 GB, GDDR5, HDMI, DVI, DP',
  'stock' : 5,
  'price' : 320.95,
  'image' : '/assets/grafica.png',
  'selected': true,
  'quantity': 0

},
{
  'id': 2,
  'name' : 'Kingston KCP313NS8/4',
  'description' : '4 GB, 1333 MHz Module Single Rank, DDR3',
  'stock' : 7,
  'price' : 28.85,
  'image' : '/assets/ram.png',
  'selected': false,
  'quantity': 0
},
{
  'id': 3,
  'name' : 'Fuente Alimentación Tacens MPII550 550W',
  'description' : 'Eficiencia alta de 85+, Formato ATX',
  'stock' : 0,
  'price' : 21.82,
  'image' : '/assets/fuente.png',
  'selected': false,
  'quantity': 0
},
{
  'id': 4,
  'name' : 'StarTech FAN9X25TX3L',
  'description' : 'Ventilador con rodamiento de bolas para chasis',
  'stock' : 3,
  'price' : 12.10,
  'image' : '/assets/ventilador.png',
  'selected': false,
  'quantity': 0
},
{
  'id': 5,
  'name' : 'Toshiba MQ01ABF050',
  'description' : 'Disco Duro Interno de 500 GB',
  'stock' : 5,
  'price' : 37.90,
  'image' : '/assets/discoduro.png',
  'selected': false,
  'quantity': 0
},
{
  'id': 6,
  'name' : 'Intel Core i5-8400',
  'description' : 'Procesador 8ª generación de procesadores Intel Core i5',
  'stock' : 3,
  'price' : 194.44,
  'image' : '/assets/procesador.png',
  'selected': false,
  'quantity': 0
}];
