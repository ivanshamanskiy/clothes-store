import mutations from './mutations.js';
import getters from './getters.js';
import actions from './actions.js';

// importing pics

import green from '../../../assets/mockups/tshirts/green.png';
import white from '../../../assets/mockups/tshirts/white.png';
import grey from '../../../assets/mockups/tshirts/grey.png';
import blueHoodie from '../../../assets/mockups/tshirts/blue-hoodie.png';
import greyHoodie from '../../../assets/mockups/tshirts/grey-hoodie.png';

export default {
    namespaced: true,
    state() {
        return {
            items: [
                {
                    id: 't-shirt-1',
                    title: 'White T-shirt',
                    imgPath: green,
                    category: 't-shirts',
                },
                {
                    id: 't-shirt-2',
                    title: 'Green T-shirt',
                    imgPath: white,
                    category: 't-shirts'
                },
                {
                    id: 't-shirt-3',
                    title: 'Grey T-shirt',
                    imgPath: grey,
                    category: 't-shirts',
                },
                {
                    id: 'hoodie-1',
                    title: 'Grey Hoodie',
                    imgPath: blueHoodie,
                    category: 'hoodies',
                },
                {
                    id: 'hoodie-2',
                    title: 'Blue hoodie',
                    imgPath: greyHoodie,
                    category: 'hoodies'
                }
            ],
            // смотрим, выбраны ли сейчас рубашки или худи
            tshirtsOn: true,
            hoodiesOn: false
        }
    },
    mutations,
    actions,
    getters
};