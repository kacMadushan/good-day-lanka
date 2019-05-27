import uuid from 'uuid';

const locations = [
    {
        id: uuid(),
        locationName: 'Kandy',
        locationInfo: 'Kandy is a large city in central Sri Lanka. Its set on a plateau surrounded by mountains, which are home to tea plantations and biodiverse rainforest. The city s heart is scenic Kandy Lake (Bogambara Lake), which is popular for strolling. Kandy is famed for sacred Buddhist sites, including the Temple of the Tooth (Sri Dalada Maligawa) shrine, celebrated with the grand Esala Perahera annual procession.',
        places: [
            {
                placeId: uuid(),
                placeImage: 'https://sridaladamaligawa.lk/sites/default/files/imagesbasic/newmaligawa.jpg',
                placeName: 'Temple of the Sacred Tooth Relic',
                info: 'Sri Dalada Maligawa or the Temple of the Sacred Tooth Relic is a Buddhist temple'
            },
            {
                placeId: uuid(),
                placeImage: 'http://travel-tips.s3-website-eu-west-1.amazonaws.com/sri-lanka-kandy-lake.jpg',
                placeName: 'Kandy Lake',
                info: 'Kandy Lake, also known as Kiri Muhuda or the Sea of Milk'
            },
            {
                placeId: uuid(),
                placeImage: 'http://www.whiteparadisehotels.com/images/explore/kandy/peradeniya-botanical-garden.jpg',
                placeName: 'Royal Botanical Gardens',
                info: 'Royal Botanic Gardens, Peradeniya are about 5.5 km to the west of the city of Kandy in the Central Province of Sri Lanka.'
            }
        ]
    },
    {
        id: uuid(),
        locationName: 'Anuradhapura',
        locationInfo: 'Anuradhapura is a major city in Sri Lanka. It is the capital city of North Central Province, Sri Lanka and the capital of Anuradhapura District. Anuradhapura is one of the ancient capitals of Sri Lanka, famous for its well-preserved ruins of an ancient Sri Lankan civilization. It was the third capital of the kingdom of Rajarata, following the kingdoms of Tambapanni and Upatissa Nuwara. The city, now a World Heritage site, was the centre of Theravada Buddhism for many centuries.',
        places: [
            {
                placeId: uuid(),
                placeImage: 'https://media.tacdn.com/media/attractions-splice-spp-674x446/06/d7/c5/94.jpg?fit=crop&w=960&h=416',
                placeName: 'Sigiriya',
                info: 'Sigiriya or Sinhagiri is an ancient rock fortress located in the northern'
            },
            {
                placeId: uuid(),
                placeImage: 'http://amazinglanka.com/wp/wp-content/uploads/2013/10/9428368750_6406e23e02_o.jpg',
                placeName: 'Mihintale',
                info: 'Mihintale is a mountain peak near Anuradhapura in Sri Lanka'
            },
            {
                placeId: uuid(),
                placeImage: 'https://www.mrt.ac.lk/web/sites/default/files/competition/slrc/gallery/2017/Ruwanwelisaya.jpg',
                placeName: 'Ruwanwelisaya',
                info: 'The Ruwanwelisaya is a stupa, a hemispherical structure containing relics, in Sri Lanka, considered sacred to many Buddhists all over the world.'
            }
        ]
    },
    {
        id: uuid(),
        locationName: 'Jaffna',
        locationInfo: 'Jaffna is a city on the northern tip of Sri Lanka. Nallur Kandaswamy is a huge Hindu temple with golden arches and an ornate gopuram tower. By the coast, star-shaped Jaffna Fort was built by the Portuguese in the 17th century and later occupied by the Dutch and British. Jaffna Public Library is a symbol of the city’s post-war regeneration. Jaffna Archaeological Museum has Dutch cannons and pre-colonial artifacts.',
        places: [
            {
                placeId: uuid(),
                placeImage: 'https://lanka.com/wp-content/gallery/nallur-kandaswamy-kovil/nallur-kandaswamy-kovil-4.jpg',
                placeName: 'Nallur Kandaswamy temple',
                info: 'Nallur Kandaswamy Kovil is a significant Hindu temple, located in Nallur, Northern '
            },
            {
                placeId: uuid(),
                placeImage: 'http://exploresrilanka.lk/wp-content/uploads/2013/11/1-copy8.jpg',
                placeName: 'Jaffna Public Library',
                info: 'Jaffna Public Library is located in Jaffna, Sri Lanka.'
            },
            {
                placeId: uuid(),
                placeImage: 'https://www.allceylon.lk/images/location/2015/12/Jaffna-Fort-1449941915.jpeg',
                placeName: 'Fort Jaffna',
                info: 'Jaffna Fort is a fort built by the Portuguese at Jaffna, Sri Lanka in 1618 under Phillippe de Oliveira following the Portuguese invasion of Jaffna.'
            },
        ]
    },
    {
        id: uuid(),
        locationName: 'Galle',
        locationInfo: 'Galle is a city on the southwest coast of Sri Lanka. It’s known for Galle Fort, the fortified old city founded by Portuguese colonists in the 16th century. Stone sea walls, expanded by the Dutch, encircle car-free streets with architecture reflecting Portuguese, Dutch and British rule. Notable buildings include the 18th-century Dutch Reformed Church. Galle Lighthouse stands on the fort’s southeast tip.',
        places: [
            {
                placeId: uuid(),
                placeImage: 'https://lanka.com/wp-content/gallery/Galle-Fort/galle-fort-2.jpg',
                placeName: 'Galle Dutch Fort',
                info: 'Galle Fort, in the Bay of Galle on the southwest coast of Sri Lanka, was built first in 1588 by the Portuguese, then extensively fortified by the Dutch during the 17th century from 1649 onwards.'
            },
            {
                placeId: uuid(),
                placeImage: 'https://cache-graphicslib.viator.com/graphicslib/page-images/742x525/288498_Viator_Thinkstock_169003.jpg',
                placeName: 'Galle Lighthouse',
                info: 'Galle Lighthouse is an onshore Lighthouse in Galle, Sri Lanka and is operated and maintained by the Sri Lanka Ports Authority.'
            },
            {
                placeId: uuid(),
                placeImage: 'https://www.bluelankatours.com/wp-content/uploads/2019/02/Culture_Club_Galle_Fort.jpg',
                placeName: 'Fort',
                info: 'The Main Gate is along the northern stretch of the fort on the land side and is heavily fortified.'
            },
        ]
    }

]

export default locations;