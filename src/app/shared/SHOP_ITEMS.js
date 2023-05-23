import solo from '../assets/img/products-01.jpg';
import duet from '../assets/img/products-02.png';
import sponsor from '../assets/img/products-03.jpg';

export const SHOP_ITEMS = [
    {
        id: 1,
        name: 'Solo Registration',
        image: solo,
        description: 'For students performing more than one solo, please add entries for each instrument type. The entry fee is $25 per student per event. Make-up day costs are an additional $10 per student, per event.',
        price: 25
    },
    {
        id: 2,
        name: 'Duet Registration',
        image: duet,
        description: 'For groups performing more than one duet, please add entries for each instrument type. The entry fee is $25 per student per event. Make-up day costs are an additional $10 per student, per event.',
        price: 25
    },
    {
        id: 3,
        name: 'Festival Sponsorship',
        image: sponsor,
        description: 'BCFMC is a volunteer run non-profit organization. All sponsorship gifts are tax deductible and go towards festival operating costs and a student scholarship fund that provides financial aid.',
        price: 50
    },
];