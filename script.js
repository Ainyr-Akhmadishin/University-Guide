

var viewer = pannellum.viewer('panorama', {
    autoLoad: true,
    default: {
        firstScene: 'Main_yard',//Стартовая сцена, можно на время работы установить другую, чтобы много не переключаться между сценами
        sceneFadeDuration: 1000 
    },
    scenes: {
        'Main_yard': {//Название сцены, называть также как и фото
            title: 'Главный двор',//Название
            type: 'equirectangular',
            panorama: 'img/Main_yard/Main_yard.jpg',//Загрузка сцены
            //Начальное положение камеры
            pitch: 0, //Поворот вверх/вниз
            yaw: 1,   //Поворот вправо/влево
            //Точки
            hotSpots: [
                {

                    pitch: 0,//Поворот вверх/вниз
                    yaw: 1,//Поворот вправо/влево
                    type: 'scene',//Тип точки scene/info
                    text: 'Перейти в первый корпус',//Текст для точки
                    sceneId: '1_build'//Название суены в которую нужно перейти
                },
                {
                    pitch: 0,  
                    yaw: -105,
                    type: 'scene',
                    text: 'Перейти в седьмой корпус',
                    sceneId: '7_build'
                },
                {
                    pitch: 0,  
                    yaw: 105,
                    type: 'scene',
                    text: 'Перейти в шестой корпус',
                    sceneId: '6_build'
                },
                {
                    pitch: 0,  
                    yaw: 83,
                    type: 'scene',
                    text: 'Перейти во второй корпус',
                    sceneId: '2_build'
                },
                {
                    pitch: 7,
                    yaw: 60,
                    type: 'info',
                    text: 'Самолёт  МиГ-19\n------------------------------------\n Сверхзвуковой всепогодный истребитель-перехватчик с номером«31», эксплуатировавшийся с 1956 по 1967 г. и совершивший 1033 полёта более чем 100 лётчиков. Самолет прибыл в вуз как учебное пособие и стал визитной карточкой УГАТУ с девизом «Штурмующим, дерзающим, творящим».'
                },
                {
                    pitch: 10,
                    yaw: -60,
                    type: 'info',
                    text: '9 корпус'
                },
                {
                    pitch: 5,
                    yaw: -90,
                    type: 'info',
                    text: '8 корпус'
                },
            ]
        },
        '1_build': {
            title: '1 корпус',
            type: 'equirectangular',
            panorama: 'img/Main_yard/1_build.jpg',
            pitch: 0, 
            yaw: 0,
            hotSpots: [
                {
                    pitch: 0,
                    yaw: 180,
                    type: 'scene',
                    text: 'Вернуться на главный двор',
                    sceneId: 'Main_yard'

                },
                {
                    pitch: 0,
                    yaw: 0,
                    type: 'scene',
                    text: 'Зайти в первый корпус',
                    sceneId: '1_build_1floor'
                },
                {
                    pitch: 0,
                    yaw: 215,
                    type: 'scene',
                    text: 'Перейти в седьмой корпус',
                    sceneId: '7_build'
                },
                {
                    pitch: 0,
                    yaw: 150,
                    type: 'scene',
                    text: 'Перейти в шестой корпус',
                    sceneId: '6_build'
                }
            ]
        },
        '1_build_1floor': {
            title: '1 корпус 1 этаж',
            type: 'equirectangular',
            panorama: 'img/1_build/1_floor/1_build_1floor_1.jpg',
            pitch: 0, 
            yaw: 180,
            hotSpots: [
                {
                    pitch: 0,
                    yaw: -10,
                    type: 'scene',
                    text: 'Выйти из первого корпуса', 
                    sceneId: '1_build'
                },
                {
                    pitch: 0,
                    yaw: -80,
                    type: 'scene',
                    text: 'Вперёд',
                    sceneId: '1_build_1floor_L2'
                },
                {
                    pitch: 0,
                    yaw: -95,
                    type: 'scene',
                    text: 'Подняться на второй этаж',
                    sceneId: '1_build_2floor_L2'
                },
                {
                    pitch: 0,
                    yaw: 65,
                    type: 'scene',
                    text: 'Вперёд',
                    sceneId: '1_build_1floor_R2'
                },
                {
                    pitch: 0,
                    yaw: 80,
                    type: 'scene',
                    text: 'Подняться на второй этаж',
                    sceneId: '1_build_2floor_R2'
                },
                {
                    pitch: 0,
                    yaw: 100,
                    type: 'info',
                    text: 'двигатель'
                },
                {
                    pitch: 0,
                    yaw: -115,
                    type: 'info',
                    text: 'двигатель'
                },

            ]
        },
        '1_build_1floor_R2':{
            title: '1 корпус 1 этаж',
            type: 'equirectangular',
            panorama: 'img/1_build/1_floor/1_build_1floor_R2.jpg',
            pitch: 0, 
            yaw: 90,
            hotSpots:[
                {
                    pitch: 0,
                    yaw: 5,
                    type: 'scene',
                    text: 'Вперёд',
                    sceneId: '1_build_1floor_R3'
                },
                {
                    pitch: -8,
                    yaw: 163,
                    type: 'scene',
                    text: 'Вперёд',
                    sceneId: '1_build_1floor'
                },
                {
                    pitch: 0,
                    yaw: 50,
                    type: 'scene',
                    text: 'Подняться на второй этаж',
                    sceneId: '1_build_2floor_R2'
                },
                
            ]
        },
        '1_build_1floor_R3':{
            title: '1 корпус 1 этаж',
            type: 'equirectangular',
            panorama: 'img/1_build/1_floor/1_build_1floor_R3.jpg',
            pitch: 0, 
            yaw: 270,
            hotSpots:[
                {
                    pitch: -4,
                    yaw: 0,
                    type: 'scene',
                    text: 'Вперёд',
                    sceneId: '1_build_1floor_R2'
                },
                {
                    pitch: -3,
                    yaw: 177,
                    type: 'scene',
                    text: 'Вперёд',
                    sceneId: '1_build_1floor_R4'
                },                
            ]
        },
        '1_build_1floor_R4':{
            title: '1 корпус 1 этаж',
            type: 'equirectangular',
            panorama: 'img/1_build/1_floor/1_build_1floor_R4.jpg',
            pitch: 0, 
            yaw: 0,
            hotSpots:[
                
                {
                    pitch: -10,
                    yaw: 120,
                    type: 'scene',
                    text: 'Вперёд',
                    sceneId: '1_build_1floor_R3'
                },
                {
                    pitch: -5,
                    yaw: -15,
                    type: 'scene',
                    text: 'Подняться на второй этаж',
                    sceneId: '1_build_2floor_R4'
                },
                
            ]
        },
        '1_build_1floor_L2':{
            title: '1 корпус 1 этаж',
            type: 'equirectangular',
            panorama: 'img/1_build/1_floor/1_build_1floor_L2.jpg',
            pitch: 0, 
            yaw: 270,
            hotSpots:[
                {
                    pitch: -5,
                    yaw: -6,
                    type: 'scene',
                    text: 'Вперёд',
                    sceneId: '1_build_1floor_L3'
                },
                {
                    pitch: -10,
                    yaw: 180,
                    type: 'scene',
                    text: 'Вперёд',
                    sceneId: '1_build_1floor'
                },
                {
                    pitch: 0,
                    yaw: -60,
                    type: 'scene',
                    text: 'Подняться на второй этаж',
                    sceneId: '1_build_2floor_L2'
                },
                
            ]
        },
        '1_build_1floor_L3':{
            title: '1 корпус 1 этаж',
            type: 'equirectangular',
            panorama: 'img/1_build/1_floor/1_build_1floor_L3.jpg',
            pitch: 0, 
            yaw: 270,
            hotSpots:[
                {
                    pitch: -2,
                    yaw: 3,
                    type: 'scene',
                    text: 'Вперёд',
                    sceneId: '1_build_1floor_L4'
                },
                {
                    pitch: 0,
                    yaw: 182,
                    type: 'scene',
                    text: 'Вперёд',
                    sceneId: '1_build_1floor_L2'
                },
                
            ]
        },
        '1_build_1floor_L4':{
            title: '1 корпус 1 этаж',
            type: 'equirectangular',
            panorama: 'img/1_build/1_floor/1_build_1floor_L4.jpg',
            pitch: 0, 
            yaw: 0,
            hotSpots:[
                {
                    pitch: 0,
                    yaw: 10,
                    type: 'scene',
                    text: 'Подняться на второй этаж',
                    sceneId: '1_build_2floor_L4'
                },
                {
                    pitch: 0,
                    yaw: -90,
                    type: 'scene',
                    text: 'Вперёд',
                    sceneId: '1_build_1floor_L3'
                },
                
            ]
        },


        '1_build_2floor_R2':{
            title: '1 корпус 2 этаж',
            type: 'equirectangular',
            panorama: 'img/1_build/2_floor/1_build_2floor_L2.jpg',
            pitch: 0, 
            yaw: 90,
            hotSpots:[
                {
                    pitch: 0,
                    yaw: 175,
                    type: 'scene',
                    text: 'Вперёд',
                    sceneId: '1_build_2floor_1'
                },
                {
                    pitch: 0,
                    yaw: 65,
                    type: 'scene',
                    text: 'Спуститься на первый этаж',
                    sceneId: '1_build_1floor_R2'
                },
                {
                    pitch: 0,
                    yaw: 55,
                    type: 'scene',
                    text: 'Подняться на третий этаж',
                    sceneId: '1_build_3floor_R2'
                },
                {
                    pitch: -2,
                    yaw: 0,
                    type: 'scene',
                    text: 'Вперёд',
                    sceneId: '1_build_2floor_R3'
                },
            ]
        },
        '1_build_2floor_1':{
            title: '1 корпус 2 этаж',
            type: 'equirectangular',
            panorama: 'img/1_build/2_floor/1_build_2floor_1.jpg',
            pitch: 0, 
            yaw: 110,
            hotSpots:[
                {
                    pitch: -2,
                    yaw: -150,
                    type: 'scene',
                    text: 'Вперёд',
                    sceneId: '1_build_2floor_L2'
                },
                {
                    pitch: 0,
                    yaw: 20,
                    type: 'scene',
                    text: 'Вперёд',
                    sceneId: '1_build_2floor_R2'
                },
                
            ]
        },
        '1_build_2floor_R3':{
            title: '1 корпус 2 этаж',
            type: 'equirectangular',
            panorama: 'img/1_build/2_floor/1_build_2floor_L3.jpg',
            pitch: 0, 
            yaw: 270,
            hotSpots:[
                {
                    pitch: -4,
                    yaw: 0,
                    type: 'scene',
                    text: 'Вперёд',
                    sceneId: '1_build_2floor_R2'
                },
                {
                    pitch: -3,
                    yaw: 177,
                    type: 'scene',
                    text: 'Вперёд',
                    sceneId: '1_build_2floor_R4'
                },                
            ]
        },
        '1_build_2floor_R4':{
            title: '1 корпус 2 этаж',
            type: 'equirectangular',
            panorama: 'img/1_build/2_floor/1_build_2floor_L4.jpg',
            pitch: 0, 
            yaw: 0,
            hotSpots:[
                
                {
                    pitch: 0,
                    yaw: 90,
                    type: 'scene',
                    text: 'Вперёд',
                    sceneId: '1_build_2floor_R3'
                },
                {
                    pitch: -5,
                    yaw: -15,
                    type: 'scene',
                    text: 'Подняться на третий этаж',
                    sceneId: '1_build_3floor_R4'
                },
                {
                    pitch: -5,
                    yaw: 15,
                    type: 'scene',
                    text: 'Спуститься на первый этаж',
                    sceneId: '1_build_1floor_R4'
                },
                {
                    pitch: -5,
                    yaw: -110,
                    type: 'scene',
                    text: 'Перейти в девятый корпус',
                    sceneId: 'Transition_1-89'
                },
                
            ]
        },
        '1_build_2floor_L2':{
            title: '1 корпус 2 этаж',
            type: 'equirectangular',
            panorama: 'img/1_build/2_floor/1_build_2floor_R2.jpg',
            pitch: 0, 
            yaw: 0,
            hotSpots:[
                {
                    pitch: 0,
                    yaw: 66,
                    type: 'scene',
                    text: 'Вправо',
                    sceneId: '1_build_2floor_L3'
                },
                {
                    pitch: 0,
                    yaw: 0,
                    type: 'scene',
                    text: 'Спуститься на первый этаж',
                    sceneId: '1_build_1floor_L2'
                },
                {
                    pitch: 0,
                    yaw: 5,
                    type: 'scene',
                    text: 'Подняться на третий этаж',
                    sceneId: '1_build_3floor_L2'
                },
                {
                    pitch: 0,
                    yaw: -110,
                    type: 'scene',
                    text: 'Влево',
                    sceneId: '1_build_2floor_1'
                },
                
            ]
        },
        '1_build_2floor_L3':{
            title: '1 корпус 2 этаж',
            type: 'equirectangular',
            panorama: 'img/1_build/2_floor/1_build_2floor_R3.jpg',
            pitch: 0, 
            yaw: 270,
            hotSpots:[
                {
                    pitch: -3,
                    yaw: 0,
                    type: 'scene',
                    text: 'Вперёд',
                    sceneId: '1_build_2floor_L2'
                },
                {
                    pitch: -3,
                    yaw: 180,
                    type: 'scene',
                    text: 'Вперёд',
                    sceneId: '1_build_2floor_L4'
                },
                
            ]
        },
        '1_build_2floor_L4':{
            title: '1 корпус 2 этаж',
            type: 'equirectangular',
            panorama: 'img/1_build/2_floor/1_build_2floor_R4.jpg',
            pitch: 0, 
            yaw: 0,
            hotSpots:[
                {
                    pitch: -5,
                    yaw: 13,
                    type: 'scene',
                    text: 'Подняться на третий этаж',
                    sceneId: '1_build_3floor_L4'
                },
                {
                    pitch: 0,
                    yaw: -100,
                    type: 'scene',
                    text: 'Вперёд',
                    sceneId: '1_build_2floor_L3'
                },
                {
                    pitch: -5,
                    yaw: -18,
                    type: 'scene',
                    text: 'Спуститься на первый этаж',
                    sceneId: '1_build_1floor_L4'
                },
                {
                    pitch: 0,
                    yaw: 85,
                    type: 'scene',
                    text: 'Перейти во второй корпус',
                    sceneId: 'Transition_1-2'
                },
            ]
        },
        'Transition_1-89': {
            title: '1 корпус 2 этаж',
            type: 'equirectangular',
            panorama: 'img/1_build/2_floor/Transition_1-89.jpg',
            pitch: 0, 
            yaw: 0,
            hotSpots: [
                {
                    pitch: -5,
                    yaw: -92,
                    type: 'scene',
                    text: 'Перейти в восьмой/девятый корпус',
                    sceneId: 'Transition_1-8-9'
                },
                {
                    pitch: 0,
                    yaw: 20,
                    type: 'scene',
                    text: 'Перейти в первый корпус',
                    sceneId: '1_build_2floor_R4'
                },
            ]
        },
        'Transition_1-2':{
            title: 'Переход между первым и вторым корпусами',
            type: 'equirectangular',
            panorama: 'img/1_build/2_floor/Transition_1-2.jpg',
            pitch: 0, 
            yaw: 90,
            hotSpots:[
                {
                    pitch: 0,
                    yaw: -5,
                    type: 'scene',
                    text: 'Перейти во второй корпус',
                    sceneId: '2_build_2floor_1'
                },
                {
                    pitch: 0,
                    yaw: -185,
                    type: 'scene',
                    text: 'Перейти в первый корпус',
                    sceneId: '1_build_2floor_L4'
                },
            ]
        },


        '1_build_3floor_R2':{
            title: '1 корпус 3 этаж',
            type: 'equirectangular',
            panorama: 'img/1_build/3_floor/1_build_3floor_L1.jpg',
            pitch: 0, 
            yaw: 90,
            hotSpots:[
                {
                    pitch: -4,
                    yaw: 177,
                    type: 'scene',
                    text: 'Вперёд',
                    sceneId: '1_build_3floor_L2'
                },
                {
                    pitch: 0,
                    yaw: 65,
                    type: 'scene',
                    text: 'Спуститься на второй этаж',
                    sceneId: '1_build_2floor_R2'
                },
                {
                    pitch: 0,
                    yaw: -30,
                    type: 'scene',
                    text: 'Подняться на четвертый этаж',
                    sceneId: '1_build_4floor_R2'
                },
                {
                    pitch: -2,
                    yaw: -2,
                    type: 'scene',
                    text: 'Вперёд',
                    sceneId: '1_build_3floor_R3'
                },
            ]
        },
        '1_build_3floor_R3':{
            title: '1 корпус 3 этаж',
            type: 'equirectangular',
            panorama: 'img/1_build/3_floor/1_build_3floor_L2.jpg',
            pitch: 0, 
            yaw: 270,
            hotSpots:[
                {
                    pitch: -4,
                    yaw: 3,
                    type: 'scene',
                    text: 'Вперёд',
                    sceneId: '1_build_3floor_R2'
                },
                {
                    pitch: -3,
                    yaw: 184,
                    type: 'scene',
                    text: 'Вперёд',
                    sceneId: '1_build_3floor_R4'
                },                
            ]
        },
        '1_build_3floor_R4':{
            title: '1 корпус 3 этаж',
            type: 'equirectangular',
            panorama: 'img/1_build/3_floor/1_build_3floor_L3.jpg',
            pitch: 0, 
            yaw: 0,
            hotSpots:[
                
                {
                    pitch: -1,
                    yaw: 83,
                    type: 'scene',
                    text: 'Вперёд',
                    sceneId: '1_build_3floor_R3'
                },
                {
                    pitch: -5,
                    yaw: -23,
                    type: 'scene',
                    text: 'Подняться на четвертый этаж',
                    sceneId: '1_build_4floor_R4'
                },
                {
                    pitch: -5,
                    yaw: 13,
                    type: 'scene',
                    text: 'Спуститься на второй этаж',
                    sceneId: '1_build_2floor_R4'
                },
                
            ]
        },
        '1_build_3floor_L2':{
            title: '1 корпус 3 этаж',
            type: 'equirectangular',
            panorama: 'img/1_build/3_floor/1_build_3floor_R1.jpg',
            pitch: 0, 
            yaw: 90,
            hotSpots:[
                {
                    pitch: 0,
                    yaw: 2,
                    type: 'scene',
                    text: 'Вперёд',
                    sceneId: '1_build_3floor_R2'
                },
                {
                    pitch: 0,
                    yaw: 20,
                    type: 'scene',
                    text: 'Спуститься на второй этаж',
                    sceneId: '1_build_2floor_L2'
                },
                {
                    pitch: 0,
                    yaw: -92,
                    type: 'scene',
                    text: 'Подняться на четвертый этаж',
                    sceneId: '1_build_4floor_L2'
                },
                {
                    pitch: 0,
                    yaw: 183,
                    type: 'scene',
                    text: 'Вперёд',
                    sceneId: '1_build_3floor_L3'
                },
                
            ]
        },
        '1_build_3floor_L3':{
            title: '1 корпус 3 этаж',
            type: 'equirectangular',
            panorama: 'img/1_build/3_floor/1_build_3floor_R2.jpg',
            pitch: 0, 
            yaw: 90,
            hotSpots:[
                {
                    pitch: -3,
                    yaw: -2,
                    type: 'scene',
                    text: 'Вперёд',
                    sceneId: '1_build_3floor_L2'
                },
                {
                    pitch: -3,
                    yaw: 178,
                    type: 'scene',
                    text: 'Вперёд',
                    sceneId: '1_build_3floor_L4'
                },
                
            ]
        },
        '1_build_3floor_L4':{
            title: '1 корпус 3 этаж',
            type: 'equirectangular',
            panorama: 'img/1_build/3_floor/1_build_3floor_R3.jpg',
            pitch: 0, 
            yaw: 0,
            hotSpots:[
                {
                    pitch: -5,
                    yaw: 13,
                    type: 'scene',
                    text: 'Подняться на четвертый этаж',
                    sceneId: '1_build_4floor_L4'
                },
                {
                    pitch: 0,
                    yaw: -94,
                    type: 'scene',
                    text: 'Вперёд',
                    sceneId: '1_build_3floor_L3'
                },
                {
                    pitch: -5,
                    yaw: -25,
                    type: 'scene',
                    text: 'Спуститься на второй этаж',
                    sceneId: '1_build_2floor_L4'
                },
            ]
        },
        '1_build_4floor_R2':{
            title: '1 корпус 4 этаж',
            type: 'equirectangular',
            panorama: 'img/1_build/4_floor/1_build_4floor_L1.jpg',
            pitch: 0, 
            yaw: 0,
            hotSpots:[
                {
                    pitch: 0,
                    yaw: 93,
                    type: 'scene',
                    text: 'Вправо',
                    sceneId: '1_build_4floor_R3'
                },
                {
                    pitch: -14,
                    yaw: 0,
                    type: 'scene',
                    text: 'Спуститься на третий этаж',
                    sceneId: '1_build_3floor_R2'
                },
            ]
        },
        '1_build_4floor_R3':{
            title: '1 корпус 4 этаж',
            type: 'equirectangular',
            panorama: 'img/1_build/4_floor/1_build_4floor_L2.jpg',
            pitch: 0, 
            yaw: 90,
            hotSpots:[
                {
                    pitch: -2,
                    yaw: 2,
                    type: 'scene',
                    text: 'Вперёд',
                    sceneId: '1_build_4floor_R4'
                },
                {
                    pitch: -3,
                    yaw: 181,
                    type: 'scene',
                    text: 'Вперёд',
                    sceneId: '1_build_4floor_R2'
                },                
            ]
        },
        '1_build_4floor_R4':{
            title: '1 корпус 4 этаж',
            type: 'equirectangular',
            panorama: 'img/1_build/4_floor/1_build_4floor_L3.jpg',
            pitch: 0, 
            yaw: 0,
            hotSpots:[
                
                {
                    pitch: -1,
                    yaw: 89,
                    type: 'scene',
                    text: 'Вперёд',
                    sceneId: '1_build_4floor_R3'
                },
                {
                    pitch: -5,
                    yaw: 20,
                    type: 'scene',
                    text: 'Спуститься на третий этаж',
                    sceneId: '1_build_3floor_R4'
                },
                
            ]
        },
        '1_build_4floor_L2':{
            title: '1 корпус 4 этаж',
            type: 'equirectangular',
            panorama: 'img/1_build/4_floor/1_build_4floor_R1.jpg',
            pitch: 0, 
            yaw: 0,
            hotSpots:[
                {
                    pitch: 0,
                    yaw: -92,
                    type: 'scene',
                    text: 'Вперёд',
                    sceneId: '1_build_4floor_L3'
                },
                {
                    pitch: -8,
                    yaw: -35,
                    type: 'scene',
                    text: 'Спуститься на третий этаж',
                    sceneId: '1_build_3floor_L2'
                },
             ]
        },
        '1_build_4floor_L3':{
            title: '1 корпус 4 этаж',
            type: 'equirectangular',
            panorama: 'img/1_build/4_floor/1_build_4floor_R2.jpg',
            pitch: 0, 
            yaw: 270,
            hotSpots:[
                {
                    pitch: -3,
                    yaw: 2,
                    type: 'scene',
                    text: 'Вперёд',
                    sceneId: '1_build_4floor_L4'
                },
                {
                    pitch: -5,
                    yaw: 179,
                    type: 'scene',
                    text: 'Вперёд',
                    sceneId: '1_build_4floor_L2'
                },
                
            ]
        },
        '1_build_4floor_L4':{
            title: '1 корпус 4 этаж',
            type: 'equirectangular',
            panorama: 'img/1_build/4_floor/1_build_4floor_R3.jpg',
            pitch: 0, 
            yaw: 0,
            hotSpots:[
                {
                    pitch: 0,
                    yaw: -94,
                    type: 'scene',
                    text: 'Вперёд',
                    sceneId: '1_build_4floor_L3'
                },
                {
                    pitch: -5,
                    yaw: -25,
                    type: 'scene',
                    text: 'Спуститься на третий этаж',
                    sceneId: '1_build_3floor_L4'
                },
            ]
        },
        '2_build': {
            title: '2 корпус',
            type: 'equirectangular',
            panorama: 'img/Main_yard/2_build.jpg',
            pitch: 0, 
            yaw: 0,
            hotSpots: [
                {
                    pitch: 0,
                    yaw: 180,
                    type: 'scene',
                    text: 'Вернуться на главный двор',
                    sceneId: 'Main_yard'
                },
                {
                    pitch: 0,
                    yaw: 0,
                    type: 'scene',
                    text: 'Зайти во второй корпус',
                    sceneId: '2_build_1floor_1'
                },
                {
                    pitch: 0,
                    yaw: 155,
                    type: 'scene',
                    text: 'Перейти в шестой корпус',
                    sceneId: '6_build'
                }
            ]
        },
        '2_build_1floor_1': {
            title: '2 корпус 1 этаж',
            type: 'equirectangular',
            panorama: 'img/2_build/1_floor/2_build_1floor_1.jpg',
            pitch: 0, 
            yaw: 0,
            hotSpots: [
                {
                    pitch: 0,
                    yaw: 180,
                    type: 'scene',
                    text: 'Вперёд',
                    sceneId: '2_build_1floor_2'
                },
                {
                    pitch: 0,
                    yaw: 270,
                    type: 'scene',
                    text: 'Подняться на второй этаж',
                    sceneId: '2_build_2floor_3'
                },

                {
                    pitch: 0,
                    yaw: 0,
                    type: 'scene',
                    text: 'Выйти из второго корпуса',
                    sceneId: '2_build'
                },
                {
                    pitch: 0,
                    yaw: 90,
                    type: 'scene',
                    text: 'Вперёд',
                    sceneId: '2_build_1floor_3'
                }
            ]
        },
        '2_build_1floor_2': {
            title: '2 корпус 1 этаж',
            type: 'equirectangular',
            panorama: 'img/2_build/1_floor/2_build_1floor_2.jpg',
            pitch: 0, 
            yaw: 0,
            hotSpots: [
                {
                    pitch: 0,
                    yaw: 200,
                    type: 'scene',
                    text: 'Подняться на второй этаж',
                    sceneId: '2_build_2floor_4'
                },
                
                {
                    pitch: 0,
                    yaw: -85,
                    type: 'scene',
                    text: 'Вперёд',
                    sceneId: '2_build_1floor_1'
                }
            ]
        },
        '2_build_1floor_3': {
            title: '2 корпус 1 этаж',
            type: 'equirectangular',
            panorama: 'img/2_build/1_floor/2_build_1floor_3.jpg',
            pitch: 0, 
            yaw: -80,
            hotSpots: [
                
                {
                    pitch: 0,
                    yaw: -20,
                    type: 'scene',
                    text: 'Подняться на второй этаж',
                    sceneId: '2_build_2floor_1'
                },
                {
                    pitch: 0,
                    yaw: 100,
                    type: 'scene',
                    text: 'Вперёд',
                    sceneId: '2_build_1floor_1'
                }
            ]
        },
        '2_build_2floor_1': {
            title: '2 корпус 2 этаж',
            type: 'equirectangular',
            panorama: 'img/2_build/2_floor/2_build_2floor_1.jpg',
            pitch: 0, 
            yaw: 270,
            hotSpots: [
                {
                    pitch: 0,
                    yaw: 187,
                    type: 'scene',
                    text: 'Перейти в первый корпус',
                    sceneId: 'Transition_1-2'
                },

                {
                    pitch: 0,
                    yaw: 5,
                    type: 'scene',
                    text: 'Спуститься на первый этаж',
                    sceneId: '2_build_1floor_3'
                },
                {
                    pitch: 0,
                    yaw: 100,
                    type: 'scene',
                    text: 'Вперёд',
                    sceneId: '2_build_2floor_3'
                }
            ]
        },
        '2_build_2floor_2': {
            title: '2 корпус 2 этаж',
            type: 'equirectangular',
            panorama: 'img/2_build/2_floor/2_build_2floor_2.jpg',
            pitch: 0, 
            yaw: 0,
            hotSpots: [
                {
                    pitch: 0,
                    yaw: 180,
                    type: 'scene',
                    text: 'Вперёд',
                    sceneId: '2_build_1floor_2'
                },
                {
                    pitch: 0,
                    yaw: 270,
                    type: 'scene',
                    text: 'Подняться на второй этаж',
                    sceneId: '2_build'
                },

                {
                    pitch: 0,
                    yaw: 0,
                    type: 'scene',
                    text: 'Выйти из второго корпуса',
                    sceneId: '2_build'
                },
                {
                    pitch: 0,
                    yaw: 90,
                    type: 'scene',
                    text: 'Вперёд',
                    sceneId: '2_build_1floor_3'
                }
            ]
        },
        '2_build_2floor_3': {
            title: '2 корпус 2 этаж',
            type: 'equirectangular',
            panorama: 'img/2_build/2_floor/2_build_2floor_3.jpg',
            pitch: 0, 
            yaw: 0,
            hotSpots: [
                
                {
                    pitch: 0,
                    yaw: 275,
                    type: 'scene',
                    text: 'Вперёд',
                    sceneId: '2_build_2floor_1'
                },

                {
                    pitch: 0,
                    yaw: 5,
                    type: 'scene',
                    text: 'Вперёд',
                    sceneId: '2_build_2floor_4'
                },
                {
                    pitch: 0,
                    yaw: 22,
                    type: 'scene',
                    text: 'Спуститься на первый этаж',
                    sceneId: '2_build_1floor_1'
                },
                {
                    pitch: 0,
                    yaw: 25,
                    type: 'scene',
                    text: 'Подняться на третий этаж',
                    sceneId: '2_build_3floor_1'
                },
                {
                    pitch: 0,
                    yaw: 90,
                    type: 'scene',
                    text: 'Перейти в шестой корпус',
                    sceneId: 'Transition_2-6'
                }
            ]
        },
        '2_build_2floor_4': {
            title: '2 корпус 2 этаж',
            type: 'equirectangular',
            panorama: 'img/2_build/2_floor/2_build_2floor_4.jpg',
            pitch: 0, 
            yaw: 0,
            hotSpots: [
                
                {
                    pitch: 0,
                    yaw: 265,
                    type: 'scene',
                    text: 'Вперёд',
                    sceneId: '2_build_2floor_3'
                },


                {
                    pitch: 0,
                    yaw: 120,
                    type: 'scene',
                    text: 'Спуститься на первый этаж',
                    sceneId: '2_build_1floor_2'
                }
            ]
        },
        'Transition_2-6': {
            title: '2 корпус 2 этаж',
            type: 'equirectangular',
            panorama: 'img/2_build/2_floor/Transition_2-6.jpg',
            pitch: 0, 
            yaw: 0,
            hotSpots: [
                
                {
                    pitch: 0,
                    yaw: 267,
                    type: 'scene',
                    text: 'Перейти во второй корпус',
                    sceneId: '2_build_2floor_3'
                },


                {
                    pitch: 0,
                    yaw: 100,
                    type: 'scene',
                    text: 'Перейти в шестой корпус',
                    sceneId: '6_build_2floor_L3'
                }
            ]
        },
        '2_build_3floor_1': {
            title: '2 корпус 3 этаж',
            type: 'equirectangular',
            panorama: 'img/2_build/3_floor/2_build_3floor_1.jpg',
            pitch: 0, 
            yaw: 0,
            hotSpots: [
                
                {
                    pitch: -10,
                    yaw: 25,
                    type: 'scene',
                    text: 'Подняться на четвёртый этаж',
                    sceneId: '2_build_4floor_1'
                },


                {
                    pitch: -10,
                    yaw: -7,
                    type: 'scene',
                    text: 'Спуститься на второй этаж',
                    sceneId: '2_build_2floor_3'
                },

                {
                    pitch: -5,
                    yaw: -47,
                    type: 'scene',
                    text: 'Вперёд',
                    sceneId: '2_build_3floor_2'
                }
            ]
        },
        '2_build_3floor_2': {
            title: '2 корпус 3 этаж',
            type: 'equirectangular',
            panorama: 'img/2_build/3_floor/2_build_3floor_2.jpg',
            pitch: 0, 
            yaw: 90,
            hotSpots: [
                
                {
                    pitch: -3,
                    yaw: -2,
                    type: 'scene',
                    text: 'Перейти в третий корпус',
                    sceneId: 'Transition_2-3'
                },


                {
                    pitch: -3,
                    yaw: 178,
                    type: 'scene',
                    text: 'Вперёд',
                    sceneId: '2_build_3floor_1'
                }
            ]
        },
        'Transition_2-3': {
            title: 'Переход между вторым и третим корпусами',
            type: 'equirectangular',
            panorama: 'img/2_build/3_floor/Transition_2-3.jpg',
            pitch: 0, 
            yaw: 90,
            hotSpots: [
                
                {
                    pitch: -3,
                    yaw: 0,
                    type: 'scene',
                    text: 'Перейти в третий корпус',
                    sceneId: '3_build_2floor_R5'
                },


                {
                    pitch: -3,
                    yaw: 178,
                    type: 'scene',
                    text: 'Перейти во второй корпус',
                    sceneId: '2_build_3floor_2'
                }
            ]
        },
        '2_build_4floor_1': {
            title: '2 корпус 4 этаж',
            type: 'equirectangular',
            panorama: 'img/2_build/4_floor/2_build_4floor_1.jpg',
            pitch: 0, 
            yaw: 0,
            hotSpots: [
                
                {
                    pitch: -5,
                    yaw: 40,
                    type: 'scene',
                    text: 'Подняться на пятый этаж',
                    sceneId: '2_build_5floor_1'
                },


                {
                    pitch: -10,
                    yaw: -7,
                    type: 'scene',
                    text: 'Спуститься на третий этаж',
                    sceneId: '2_build_3floor_1'
                },

                {
                    pitch: -5,
                    yaw: -35,
                    type: 'scene',
                    text: 'Вперёд',
                    sceneId: '2_build_4floor_2'
                }
            ]
        },
        '2_build_4floor_2': {
            title: '2 корпус 4 этаж',
            type: 'equirectangular',
            panorama: 'img/2_build/4_floor/2_build_4floor_2.jpg',
            pitch: 0, 
            yaw: 185,
            hotSpots: [
                
                {
                    pitch: 0,
                    yaw: 3,
                    type: 'scene',
                    text: 'Вперёд',
                    sceneId: '2_build_4floor_1'
                }
            ]
        },
        '2_build_5floor_1': {
            title: '2 корпус 5 этаж',
            type: 'equirectangular',
            panorama: 'img/2_build/5_floor/2_build_5floor_1.jpg',
            pitch: -5, 
            yaw: 180,
            hotSpots: [
                

                {
                    pitch: -15,
                    yaw: 170,
                    type: 'scene',
                    text: 'Спуститься на четвёртый этаж',
                    sceneId: '2_build_4floor_1'
                },

                {
                    pitch: -5,
                    yaw: 125,
                    type: 'scene',
                    text: 'Вперёд',
                    sceneId: '2_build_5floor_2'
                }
            ]
        },
        '2_build_5floor_2': {
            title: '2 корпус 5 этаж',
            type: 'equirectangular',
            panorama: 'img/2_build/5_floor/2_build_5floor_2.jpg',
            pitch: 0, 
            yaw: 270,
            hotSpots: [
                
                {
                    pitch: 0,
                    yaw: 87,
                    type: 'scene',
                    text: 'Вперёд',
                    sceneId: '2_build_5floor_1'
                }
            ]
        },

        '3_build':{
            title: '3 корпус',
            type: 'equirectangular',
            panorama: 'img/Main_yard/3_build.jpg',
            pitch: 0, 
            yaw: 0,
            hotSpots: [
                 {
                    pitch: 0,
                    yaw: -3,
                    type: 'scene',
                    text: 'Зайти в третий корпус',
                    sceneId: '3_build_1floor'
                }, 
            ]
        },   
        '3_build_1floor':{
            title: '3 корпус 1 этаж',
            type: 'equirectangular',
            panorama: 'img/3_build/1_floor/3_build_1floor_1.jpg',
            pitch: 0, 
            yaw: 0,
            hotSpots: [
                
                {
                    pitch: -5,
                    yaw: 50,
                    type: 'scene',
                    text: 'Выйти из третьего корпуса',
                    sceneId: '3_build'
                }, 
                {
                    pitch: 0,
                    yaw: -30,
                    type: 'scene',
                    text: 'Подняться на второй этаж',
                    sceneId: '3_build_2floor_1'
                },        
                
            ]
        },
        '3_build_2floor_1':{
            title: '3 корпус 2 этаж',
            type: 'equirectangular',
            panorama: 'img/3_build/2_floor/3_build_2floor_1.jpg',
            pitch: 0, 
            yaw: 0,
            hotSpots: [
                
                {
                    pitch: 0,
                    yaw: 45,
                    type: 'scene',
                    text: 'Вперёд',
                    sceneId: '3_build_2floor_R2'
                }, 
                {
                    pitch: 0,
                    yaw: -91,
                    type: 'scene',
                    text: 'Вперёд',
                    sceneId: '3_build_2floor_L2'
                },        
                {
                    pitch: 0,
                    yaw: 17,
                    type: 'scene',
                    text: 'Спуститься на первый этаж',
                    sceneId: '3_build_1floor'
                }, 
                {
                    pitch: 0,
                    yaw: -20,
                    type: 'scene',
                    text: 'Подняться на третий этаж',
                    sceneId: '3_build_3floor_1'
                }, 
            ]
        },
        '3_build_2floor_L2':{
            title: '3 корпус 2 этаж',
            type: 'equirectangular',
            panorama: 'img/3_build/2_floor/3_build_2floor_L2.jpg',
            pitch: 0, 
            yaw: 180,
            hotSpots: [
                
                {
                    pitch: -1,
                    yaw: 3,
                    type: 'scene',
                    text: 'Вперёд',
                    sceneId: '3_build_2floor_1'
                }, 
            ]
        },
        '3_build_2floor_R2':{
            title: '3 корпус 2 этаж',
            type: 'equirectangular',
            panorama: 'img/3_build/2_floor/3_build_2floor_R2.jpg',
            pitch: 0, 
            yaw: 180,
            hotSpots: [
                {
                    pitch: 0,
                    yaw: 65,
                    type: 'scene',
                    text: 'Вперёд',
                    sceneId: '3_build_2floor_1'
                }, 
                {
                    pitch: 2,
                    yaw: -1,
                    type: 'scene',
                    text: 'Вперёд',
                    sceneId: '3_build_2floor_R3'
                }, 
                {
                    pitch: -1,
                    yaw: -95,
                    type: 'scene',
                    text: 'Перейти в четвёртый корпус',
                    sceneId: '4_build_2floor_R4'
                },        
            ]
        },
        '3_build_2floor_R3':{
            title: '3 корпус 2 этаж',
            type: 'equirectangular',
            panorama: 'img/3_build/2_floor/3_build_2floor_R3.jpg',
            pitch: 0, 
            yaw: 90,
            hotSpots: [
                
                {
                    pitch: 0,
                    yaw: -178,
                    type: 'scene',
                    text: 'Вперёд',
                    sceneId: '3_build_2floor_R4'
                }, 
                {
                    pitch: 0,
                    yaw: 0,
                    type: 'scene',
                    text: 'Вперёд',
                    sceneId: '3_build_2floor_R2'
                },        
            ]
        },
        '3_build_2floor_R4':{
            title: '3 корпус 2 этаж',
            type: 'equirectangular',
            panorama: 'img/3_build/2_floor/3_build_2floor_R4.jpg',
            pitch: 0, 
            yaw: -90,
            hotSpots: [
                
                {
                    pitch: -3,
                    yaw: -179,
                    type: 'scene',
                    text: 'Вперёд',
                    sceneId: '3_build_2floor_R3'
                }, 
                {
                    pitch: 0,
                    yaw: -90,
                    type: 'scene',
                    text: 'Вперёд',
                    sceneId: '3_build_2floor_R5'
                },        
            ]
        },
        '3_build_2floor_R5':{
            title: '3 корпус 2 этаж',
            type: 'equirectangular',
            panorama: 'img/3_build/2_floor/3_build_2floor_R5.jpg',
            pitch: 0, 
            yaw: 0,
            hotSpots: [
                
                {
                    pitch: -3,
                    yaw: -80,
                    type: 'scene',
                    text: 'Перейти во второй корпус',
                    sceneId: 'Transition_2-3'
                }, 
                {
                    pitch: 0,
                    yaw: 90,
                    type: 'scene',
                    text: 'Вперёд',
                    sceneId: '3_build_2floor_R4'
                },        
            ]
        },
        '3_build_3floor_1':{
            title: '3 корпус 3 этаж',
            type: 'equirectangular',
            panorama: 'img/3_build/3_floor/3_build_3floor_1.jpg',
            pitch: 0, 
            yaw: 0,
            hotSpots: [
                
                {
                    pitch: 0,
                    yaw: 95,
                    type: 'scene',
                    text: 'Вперёд',
                    sceneId: '3_build_3floor_R2'
                }, 
                {
                    pitch: 0,
                    yaw: -97,
                    type: 'scene',
                    text: 'Вперёд',
                    sceneId: '3_build_3floor_L2'
                },        
                {
                    pitch: 0,
                    yaw: 17,
                    type: 'scene',
                    text: 'Спуститься на второй этаж',
                    sceneId: '3_build_2floor_1'
                }, 
                {
                    pitch: 0,
                    yaw: -20,
                    type: 'scene',
                    text: 'Подняться на четвертый этаж',
                    sceneId: '3_build_4floor_1'
                }, 
            ]
        },
        '3_build_3floor_L2':{
            title: '3 корпус 3 этаж',
            type: 'equirectangular',
            panorama: 'img/3_build/3_floor/3_build_3floor_L2.jpg',
            pitch: 0, 
            yaw: 0,
            hotSpots: [
                
                {
                    pitch: -1,
                    yaw: 177,
                    type: 'scene',
                    text: 'Вперёд',
                    sceneId: '3_build_3floor_1'
                }, 
            ]
        },
        '3_build_3floor_R2':{
            title: '3 корпус 3 этаж',
            type: 'equirectangular',
            panorama: 'img/3_build/3_floor/3_build_3floor_R2.jpg',
            pitch: 0, 
            yaw: 0,
            hotSpots: [
                
                {
                    pitch: -1,
                    yaw: 3,
                    type: 'scene',
                    text: 'Вперёд',
                    sceneId: '3_build_3floor_1'
                }, 
            ]
        },

        '3_build_4floor_1':{
            title: '3 корпус 4 этаж',
            type: 'equirectangular',
            panorama: 'img/3_build/4_floor/3_build_4floor_1.jpg',
            pitch: 0, 
            yaw: 0,
            hotSpots: [
                
                {
                    pitch: 0,
                    yaw: 105,
                    type: 'scene',
                    text: 'Вперёд',
                    sceneId: '3_build_4floor_R2'
                }, 
                {
                    pitch: 0,
                    yaw: -97,
                    type: 'scene',
                    text: 'Вперёд',
                    sceneId: '3_build_4floor_L2'
                },        
                {
                    pitch: 0,
                    yaw: 17,
                    type: 'scene',
                    text: 'Спуститься на третий этаж',
                    sceneId: '3_build_3floor_1'
                }, 
            ]
        },
        '3_build_4floor_L2':{
            title: '3 корпус 4 этаж',
            type: 'equirectangular',
            panorama: 'img/3_build/4_floor/3_build_4floor_L2.jpg',
            pitch: 0, 
            yaw: 180,
            hotSpots: [
                
                {
                    pitch: -2,
                    yaw: 179,
                    type: 'scene',
                    text: 'Вперёд',
                    sceneId: '3_build_4floor_L3'
                }, 
                {
                    pitch: -2,
                    yaw: -3,
                    type: 'scene',
                    text: 'Вперёд',
                    sceneId: '3_build_4floor_1'
                },
            ]
        },
        '3_build_4floor_L3':{
            title: '3 корпус 4 этаж',
            type: 'equirectangular',
            panorama: 'img/3_build/4_floor/3_build_4floor_L3.jpg',
            pitch: 0, 
            yaw: 0,
            hotSpots: [
                {
                    pitch: 1,
                    yaw: 0,
                    type: 'scene',
                    text: 'Вперёд',
                    sceneId: '3_build_4floor_L2'
                },

            ]
        },
        '3_build_4floor_R2':{
            title: '3 корпус 4 этаж',
            type: 'equirectangular',
            panorama: 'img/3_build/4_floor/3_build_4floor_R2.jpg',
            pitch: 0, 
            yaw: 0,
            hotSpots: [
                {
                    pitch: -1,
                    yaw: 3,
                    type: 'scene',
                    text: 'Вперёд',
                    sceneId: '3_build_4floor_1'
                },

            ]
        },
        '4_build_1floor_1':{
            title: '4 корпус 1 этаж',
            type: 'equirectangular',
            panorama: 'img/4_build/1_floor/4_build_1floor_1.jpg',
            pitch: 0, 
            yaw: 0,
            hotSpots: [
                {
                    pitch: 0,
                    yaw: 22,
                    type: 'scene',
                    text: 'Вперёд',
                    sceneId: '4_build_1floor_R2'
                },
                {
                    pitch: 0,
                    yaw: -90,
                    type: 'scene',
                    text: 'Вперёд',
                    sceneId: '4_build_1floor_L2'
                },
                {
                    pitch: 0,
                    yaw: -14,
                    type: 'scene',
                    text: 'Подняться на второй этаж',
                    sceneId: '4_build_2floor_1',
                },

            ]
        },
        '4_build_1floor_L2':{
            title: '4 корпус 1 этаж',
            type: 'equirectangular',
            panorama: 'img/4_build/1_floor/4_build_1floor_L2.jpg',
            pitch: 0, 
            yaw: 0,
            hotSpots: [
                {
                    pitch: -1,
                    yaw: 90,
                    type: 'scene',
                    text: 'Вперёд',
                    sceneId: '4_build_1floor_1'
                },
                {
                    pitch: 0,
                    yaw: -92    ,
                    type: 'scene',
                    text: 'Вперёд',
                    sceneId: '4_build_1floor_L3'
                },

            ]
        },
        '4_build_1floor_L3':{
            title: '4 корпус 1 этаж',
            type: 'equirectangular',
            panorama: 'img/4_build/1_floor/4_build_1floor_L3.jpg',
            pitch: 0, 
            yaw: 0,
            hotSpots: [
                {
                    pitch: -2,
                    yaw: 90,
                    type: 'scene',
                    text: 'Вперёд',
                    sceneId: '4_build_1floor_L2'
                },
                {
                    pitch: 0,
                    yaw: -15,
                    type: 'scene',
                    text: 'Подняться на второй этаж',
                    sceneId: '4_build_2floor_L2'
                },
                {
                    pitch: -2,
                    yaw: -45,
                    type: 'scene',
                    text: 'Перейти в пятый корпус',
                    sceneId: '5_build_1floor_1',
                },

            ]
        },
        '4_build_1floor_R2':{
            title: '4 корпус 1 этаж',
            type: 'equirectangular',
            panorama: 'img/4_build/1_floor/4_build_1floor_R2.jpg',
            pitch: 0, 
            yaw: 180,
            hotSpots: [
                {
                    pitch: -2,
                    yaw: 87,
                    type: 'scene',
                    text: 'Вперёд',
                    sceneId: '4_build_1floor_1'
                },
                {
                    pitch: -2,
                    yaw: -93,
                    type: 'scene',
                    text: 'Вперёд',
                    sceneId: '4_build_1floor_R3'
                },

            ]
        },
        '4_build_1floor_R3':{
            title: '4 корпус 1 этаж',
            type: 'equirectangular',
            panorama: 'img/4_build/1_floor/4_build_1floor_R3.jpg',
            pitch: 0, 
            yaw: 0,
            hotSpots: [
                {
                    pitch: 0,
                    yaw: -88,
                    type: 'scene',
                    text: 'Вперёд',
                    sceneId: '4_build_1floor_R2'
                },
                {
                    pitch: -1,
                    yaw: 93 ,
                    type: 'scene',
                    text: 'Вперёд',
                    sceneId: '4_build_1floor_R4'
                },

            ]
        },
        '4_build_1floor_R4':{
            title: '4 корпус 1 этаж',
            type: 'equirectangular',
            panorama: 'img/4_build/1_floor/4_build_1floor_R4.jpg',
            pitch: 0, 
            yaw: 180,
            hotSpots: [
                {
                    pitch: 0,
                    yaw: 90,
                    type: 'scene',
                    text: 'Вперёд',
                    sceneId: '4_build_1floor_R3'
                },
            ]
        },
        '4_build_2floor_1':{
            title: '4 корпус 2 этаж',
            type: 'equirectangular',
            panorama: 'img/4_build/2_floor/4_build_2floor_1.jpg',
            pitch: 0, 
            yaw: 0,
            hotSpots: [
                {
                    pitch: 0,
                    yaw: 17,
                    type: 'scene',
                    text: 'Вперёд',
                    sceneId: '4_build_2floor_R2'
                },
                {
                    pitch: 0,
                    yaw: -90,
                    type: 'scene',
                    text: 'Вперёд',
                    sceneId: '4_build_2floor_L2'
                },
                {
                    pitch: 0,
                    yaw: -14,
                    type: 'scene',
                    text: 'Подняться на третий этаж',
                    sceneId: '4_build_3floor_1',
                },
                {
                    pitch: -3,
                    yaw: -60,
                    type: 'scene',
                    text: 'Спуститься на первый этаж',
                    sceneId: '4_build_1floor_1',
                },
            ]
        },
        '4_build_2floor_L2':{
            title: '4 корпус 2 этаж',
            type: 'equirectangular',
            panorama: 'img/4_build/2_floor/4_build_2floor_L2.jpg',
            pitch: 0, 
            yaw: 0,
            hotSpots: [
                {
                    pitch: 0,
                    yaw: 92,
                    type: 'scene',
                    text: 'Вперёд',
                    sceneId: '4_build_2floor_1'
                },
                {
                    pitch: -10,
                    yaw: 12,
                    type: 'scene',
                    text: 'Спуститься на первый этаж',
                    sceneId: '4_build_1floor_L3'
                },
                {
                    pitch: 0,
                    yaw: -14,
                    type: 'scene',
                    text: 'Подняться на третий этаж',
                    sceneId: '4_build_3floor_L2',
                },
                {
                    pitch: -3,
                    yaw: -90,
                    type: 'scene',
                    text: 'Перейти в пятый корпус',
                    sceneId: '5_build_2floor_2'
                },
            ]
        },
        '4_build_2floor_R2':{
            title: '4 корпус 2 этаж',
            type: 'equirectangular',
            panorama: 'img/4_build/2_floor/4_build_2floor_R2.jpg',
            pitch: 0, 
            yaw: 0,
            hotSpots: [
                {
                    pitch: 0,
                    yaw: -93,
                    type: 'scene',
                    text: 'Вперёд',
                    sceneId: '4_build_2floor_1'
                },
                {
                    pitch: 0,
                    yaw: 86 ,
                    type: 'scene',
                    text: 'Вперёд',
                    sceneId: '4_build_2floor_R3'
                },

            ]
        },
        '4_build_2floor_R3':{
            title: '4 корпус 2 этаж',
            type: 'equirectangular',
            panorama: 'img/4_build/2_floor/4_build_2floor_R3.jpg',
            pitch: 0, 
            yaw: 0,
            hotSpots: [
                {
                    pitch: -1,
                    yaw: -89,
                    type: 'scene',
                    text: 'Вперёд',
                    sceneId: '4_build_2floor_R2'
                },
                {
                    pitch: -3,
                    yaw: 88 ,
                    type: 'scene',
                    text: 'Вперёд',
                    sceneId: '4_build_2floor_R4'
                },

            ]
        },
        '4_build_2floor_R4':{
            title: '4 корпус 2 этаж',
            type: 'equirectangular',
            panorama: 'img/4_build/2_floor/4_build_2floor_R4.jpg',
            pitch: 0, 
            yaw: -90,
            hotSpots: [
                {
                    pitch: -1,
                    yaw: 0,
                    type: 'scene',
                    text: 'Вперёд',
                    sceneId: '4_build_2floor_R3'
                },
                {
                    pitch: -1,
                    yaw: -120 ,
                    type: 'scene',
                    text: 'Перейти в третий корпус',
                    sceneId: '3_build_2floor_R2'
                },

            ]
        },
        '4_build_3floor_1':{
            title: '4 корпус 3 этаж',
            type: 'equirectangular',
            panorama: 'img/4_build/3_floor/4_build_3floor_1.jpg',
            pitch: 0, 
            yaw: 0,
            hotSpots: [
                {
                    pitch: 0,
                    yaw: 8,
                    type: 'scene',
                    text: 'Вперёд',
                    sceneId: '4_build_3floor_R2'
                },
                {
                    pitch: 0,
                    yaw: -90,
                    type: 'scene',
                    text: 'Вперёд',
                    sceneId: '4_build_3floor_L2'
                },
                {
                    pitch: 0,
                    yaw: -20,
                    type: 'scene',
                    text: 'Подняться на четвёртый этаж',
                    sceneId: '4_build_4floor_1',
                },
                {
                    pitch: -3,
                    yaw: -60,
                    type: 'scene',
                    text: 'Спуститься на второй этаж',
                    sceneId: '4_build_2floor_1',
                },
            ]
        },
        '4_build_3floor_L2':{
            title: '4 корпус 3 этаж',
            type: 'equirectangular',
            panorama: 'img/4_build/3_floor/4_build_3floor_L2.jpg',
            pitch: 0, 
            yaw: 0,
            hotSpots: [
                {
                    pitch: -2,
                    yaw: 90,
                    type: 'scene',
                    text: 'Вперёд',
                    sceneId: '4_build_3floor_1'
                },
                {
                    pitch: -10,
                    yaw: 12,
                    type: 'scene',
                    text: 'Спуститься на второй этаж',
                    sceneId: '4_build_2floor_L2'
                },
                {
                    pitch: 0,
                    yaw: -13,
                    type: 'scene',
                    text: 'Подняться на четвёртый этаж',
                    sceneId: '4_build_4floor_L2',
                },
                {
                    pitch: -3,
                    yaw: -88,
                    type: 'scene',
                    text: 'Перейти в пятый корпус',
                    sceneId: '5_build_3floor_R2'
                },
            ]
        },
        '4_build_3floor_R2':{
            title: '4 корпус 3 этаж',
            type: 'equirectangular',
            panorama: 'img/4_build/3_floor/4_build_3floor_R2.jpg',
            pitch: 0, 
            yaw: 0,
            hotSpots: [
                {
                    pitch: 0,
                    yaw: -92,
                    type: 'scene',
                    text: 'Вперёд',
                    sceneId: '4_build_3floor_1'
                },
            ]
        },
        '4_build_4floor_1':{
            title: '4 корпус 4 этаж',
            type: 'equirectangular',
            panorama: 'img/4_build/4_floor/4_build_4floor_1.jpg',
            pitch: 0, 
            yaw: 0,
            hotSpots: [
                {
                    pitch: 0,
                    yaw: -92,
                    type: 'scene',
                    text: 'Вперёд',
                    sceneId: '4_build_4floor_L2'
                },
                {
                    pitch: -3,
                    yaw: -60,
                    type: 'scene',
                    text: 'Спуститься на третий этаж',
                    sceneId: '4_build_3floor_1',
                },
            ]
        },
        '4_build_4floor_L2':{
            title: '4 корпус 4 этаж',
            type: 'equirectangular',
            panorama: 'img/4_build/4_floor/4_build_4floor_L2.jpg',
            pitch: 0, 
            yaw: 0,
            hotSpots: [
                {
                    pitch: -2,
                    yaw: 91,
                    type: 'scene',
                    text: 'Вперёд',
                    sceneId: '4_build_4floor_1'
                },
                {
                    pitch: -13,
                    yaw: 12,
                    type: 'scene',
                    text: 'Спуститься на третий этаж',
                    sceneId: '4_build_3floor_L2'
                },
                {
                    pitch: -3,
                    yaw: -90,
                    type: 'scene',
                    text: 'Перейти в пятый корпус',
                    sceneId: '5_build_4floor_2'
                },
            ]
        },
        '5_build_1floor_1': {
            title: '5 корпус 1 этаж',
            type: 'equirectangular',
            panorama: 'img/5_build/1_floor/5_build_1floor_1.jpg',
            pitch: 0, 
            yaw: 180,
            hotSpots: [
                
                {
                    pitch: -5,
                    yaw: 83,
                    type: 'scene',
                    text: 'Вперёд',
                    sceneId: '5_build_1floor_R2'
                },
                {
                    pitch: -3,
                    yaw: -95,
                    type: 'scene',
                    text: 'Перейти в четвёртый корпус',
                    sceneId: '4_build_1floor_L3'
                },
                
                
                
            ]
        },
        '5_build_1floor_R2': {
                title: '5 корпус 1 этаж',
                type: 'equirectangular',
                panorama: 'img/5_build/1_floor/5_build_1floor_R2.jpg',
                pitch: 0, 
                yaw: 0,
                hotSpots: [
                    
                    {
                        pitch: -2,
                        yaw: 88,
                        type: 'scene',
                        text: 'Вперёд',
                        sceneId: '5_build_1floor_1'
                    },
                    {
                        pitch: 3,
                        yaw: 0,
                        type: 'scene',
                        text: 'Подняться на второй этаж',
                        sceneId: '5_build_2floor_1'
                    },
                    
                    
                    
            ]
        },
        '5_build_2floor_1': {
                title: '5 корпус 2 этаж',
                type: 'equirectangular',
                panorama: 'img/5_build/2_floor/5_build_2floor_1.jpg',
                pitch: 0, 
                yaw: 0,
                hotSpots: [
                    
                    {
                        pitch: 0,
                        yaw: 92,
                        type: 'scene',
                        text: 'Перейти в четвёртый корпус',
                        sceneId: '5_build_2floor_2'
                    },
                    {
                        pitch: 3,
                        yaw: 7,
                        type: 'scene',
                        text: 'Подняться на третий этаж',
                        sceneId: '5_build_3floor_1'
                    },
                    {
                        pitch: -20,
                        yaw: -6  ,
                        type: 'scene',
                        text: 'Спуститься на первый этаж',
                        sceneId: '5_build_1floor_R2'
                    },
                    
                    
                    
            ]
        },
        '5_build_2floor_2': {
                title: '5 корпус 2 этаж',
                type: 'equirectangular',
                panorama: 'img/5_build/2_floor/5_build_2floor_2.jpg',
                pitch: 0, 
                yaw: 0,
                hotSpots: [
                    
                    
                    {
                        pitch: -5,
                        yaw: 15,
                        type: 'scene',
                        text: 'Перейти в четвёртый корпус',
                        sceneId: '4_build_2floor_L2'
                    },
                    {
                        pitch: -5,
                        yaw: -150  ,
                        type: 'scene',
                        text: 'Вперёд',
                        sceneId: '5_build_2floor_1'
                    },
                                                           
            ]
        },
        '5_build_3floor_1': {
                title: '5 корпус 3 этаж',
                type: 'equirectangular',
                panorama: 'img/5_build/3_floor/5_build_3floor_1.jpg',
                pitch: 0, 
                yaw: 0,
                hotSpots: [
                    
                    {
                        pitch: 0,
                        yaw: 92,
                        type: 'scene',
                        text: 'Перейти в четвёртый корпус',
                        sceneId: '5_build_3floor_R2'
                    },
                    {
                        pitch: -20,
                        yaw: -9  ,
                        type: 'scene',
                        text: 'Спуститься на второй этаж',
                        sceneId: '5_build_2floor_1'
                    },
                    {
                        pitch: -4,
                        yaw: -90,
                        type: 'scene',
                        text: 'Перейти в шестой корпус',
                        sceneId: '5_build_3floor_L2'
                    },
                
                
            ]
        },
        '5_build_3floor_R2': {
                title: '5 корпус 3 этаж',
                type: 'equirectangular',
                panorama: 'img/5_build/3_floor/5_build_3floor_R2.jpg',
                pitch: 0, 
                yaw: 0,
                hotSpots: [
                    
                    {
                        pitch: -4,
                        yaw: -185,
                        type: 'scene',
                        text: 'Вперёд',
                        sceneId: '5_build_3floor_1'
                    },
                    {
                        pitch: -2,
                        yaw: -16  ,
                        type: 'scene',
                        text: 'Перейти в четвёртый корпус',
                        sceneId: '4_build_3floor_L2'
                    },   
                    
            ]
        },
        '5_build_3floor_L2': {
                title: '5 корпус 3 этаж',
                type: 'equirectangular',
                panorama: 'img/5_build/3_floor/5_build_3floor_L2.jpg',
                pitch: 0, 
                yaw: -90,
                hotSpots: [
                    
                    {
                        pitch: -3,
                        yaw: 0  ,
                        type: 'scene',
                        text: 'Вперёд',
                        sceneId: '5_build_3floor_1'
                    },
                    {
                        pitch: -4,
                        yaw: -148,
                        type: 'scene',
                        text: 'Перейти в шестой корпус',
                        sceneId: 'Transition_5-6'
                    },
                    
                    
            ]
        },
        'Transition_5-6': {
                title: 'Переход между пятым и шестым корпусами',
                type: 'equirectangular',
                panorama: 'img/5_build/3_floor/Transition_5-6.jpg',
                pitch: 0, 
                yaw: 90,
                hotSpots: [
                    
                    {
                        pitch: 0,
                        yaw: 0  ,
                        type: 'scene',
                        text: 'Перейти в пятый корпус',
                        sceneId: '5_build_3floor_L2'
                    },
                    {
                        pitch: -4,
                        yaw: -195,
                        type: 'scene',
                        text: 'Перейти в шестой корпус',
                        sceneId: '6_build_3floor_L3'
                    },
                    
                    
            ]
        },

        '6_build': {
            title: '6 корпус',
            type: 'equirectangular',
            panorama: 'img/Main_yard/6_build.jpg',
            pitch: 0, 
            yaw: 0,
            hotSpots: [
                {
                    pitch: 0,
                    yaw: 110,
                    type: 'scene',
                    text: 'Вернуться на главный двор',
                    sceneId: 'Main_yard'
                },
                {
                    pitch: 0,
                    yaw: 80,
                    type: 'scene',
                    text: 'Перейти в седьмой корпус',
                    sceneId: '7_build'
                },
                {
                    pitch: 0,
                    yaw: 0,
                    type: 'scene',
                    text: 'Зайти в шестой корпус',
                    sceneId: '6_build_1floor_1'
                },
                {
                    pitch: 0,
                    yaw: -95,
                    type: 'scene',
                    text: 'Перейти во второй корпус',
                    sceneId: '2_build'
                },
                {
                    pitch: 0,
                    yaw: 160,
                    type: 'scene',
                    text: 'Перейти в первый корпус',
                    sceneId: '1_build'
                },
                {
                    pitch: 10,
                    yaw: 200,
                    type: 'info',
                    text: 'Самолёт  МиГ-19\n------------------------------------\n Сверхзвуковой всепогодный истребитель-перехватчик с номером«31», эксплуатировавшийся с 1956 по 1967 г. и совершивший 1033 полёта более чем 100 лётчиков. Самолет прибыл в вуз как учебное пособие и стал визитной карточкой УГАТУ с девизом «Штурмующим, дерзающим, творящим».'
                },
            ]
        },

        '6_build_1floor_1': {
            title: '6 корпус 1 этаж',
            type: 'equirectangular',
            panorama: 'img/6_build/1_floor/6_build_1floor_1.jpg',
            pitch: 0, 
            yaw: 0,
            hotSpots: [
                
                {
                    pitch: 0,
                    yaw: -50,
                    type: 'scene',
                    text: 'Вперёд',
                    sceneId: '6_build_1floor_2L'
                },
                {
                    pitch: 0,
                    yaw: 165,
                    type: 'scene',
                    text: 'Перейти на лестницу',
                    sceneId: '6_build_1floor_2R'
                },
                {
                    pitch: 0,
                    yaw: 180,
                    type: 'scene',
                    text: 'Выйти из шестого корпуса',
                    sceneId: '6_build'
                },
                {
                    pitch: 0,
                    yaw: -105,
                    type: 'info',
                    text: 'Бренд-зона АО «Уфанет» \n-------------------------------------\n Пространство, подаренное компанией-партнёром вузу в знак дружбы и сотрудничества. Здесь установлены удобная мебель, телевизоры и современные гаджеты, создавая комфортные условия, где студенты могут отдохнуть и поработать.',
                },
                
            ]
        },


        '6_build_1floor_2L': {
            title: '6 корпус 1 этаж',
            type: 'equirectangular',
            panorama: 'img/6_build/1_floor/6_build_1floor_2L.jpg',
            pitch: 0, 
            yaw: 0,
            hotSpots: [
                
                {
                    pitch: 0,
                    yaw: -82,
                    type: 'scene',
                    text: 'Вперёд',
                    sceneId: '6_build_1floor_3L'
                },
                {
                    pitch: 0,
                    yaw: -25,
                    type: 'scene',
                    text: 'Перейти на второй этаж',
                    sceneId: '6_build_2floor_1'
                },
                {
                    pitch: 0,
                    yaw: 85,
                    type: 'scene',
                    text: 'Вперёд',
                    sceneId: '6_build_1floor_1'
                },
                
                
            ]
        },
        '6_build_1floor_3L': {
            title: '6 корпус 1 этаж',
            type: 'equirectangular',
            panorama: 'img/6_build/1_floor/6_build_1floor_3L.jpg',
            pitch: 0, 
            yaw: 0,
            hotSpots: [
                
                {
                    pitch: 0,
                    yaw: -181,
                    type: 'scene',
                    text: 'Вперёд',
                    sceneId: '6_build_1floor_2L'
                },
         
            ]
        },
        '6_build_1floor_2R': {
            title: '6 корпус 1 этаж',
            type: 'equirectangular',
            panorama: 'img/6_build/1_floor/6_build_1floor_2R.jpg',
            pitch: 0, 
            yaw: 90,
            hotSpots: [
                
                {
                    pitch: -10,
                    yaw: 97,
                    type: 'scene',
                    text: 'Перейти в седьмой корпус',
                    sceneId: 'Transition_6-7'
                },
                {
                    pitch: -10,
                    yaw: 75,
                    type: 'scene',
                    text: 'Подняться на второй этаж',
                    sceneId: '6_build_2floor_R3'
                },
                {
                    pitch: -10,
                    yaw: 0,
                    type: 'scene',
                    text: 'Вперёд',
                    sceneId: '6_build_1floor_1'
                },
         
            ]
        },
        'Transition_6-7': {
            title: 'Переход между шестым и седьмым корпусами',
            type: 'equirectangular',
            panorama: 'img/6_build/1_floor/Transition_6-7.jpg',
            pitch: 0, 
            yaw: 90,
            hotSpots: [
                
                {
                    pitch: 0,
                    yaw: 3,
                    type: 'scene',
                    text: 'Перейти во седьмой корпус',
                    sceneId: '7_build_1floor_1'
                },


                {
                    pitch: 0,
                    yaw: 185,
                    type: 'scene',
                    text: 'Перейти в шестой корпус',
                    sceneId: '6_build_1floor_2R'
                }
            ]
        },
        '6_build_2floor_1': {
            title: '6 корпус 2 этаж',
            type: 'equirectangular',
            panorama: 'img/6_build/2_floor/6_build_2floor_1.jpg',
            pitch: 0, 
            yaw: 0,
            hotSpots: [
                
                {
                    pitch: 0,
                    yaw: -82,
                    type: 'scene',
                    text: 'Вперёд',
                    sceneId: '6_build_2floor_L2'
                },
                {
                    pitch: 0,
                    yaw: -25,
                    type: 'scene',
                    text: 'Подняться на третий этаж',
                    sceneId: '6_build_3floor_1'
                },
                {
                    pitch: 0,
                    yaw: 25,
                    type: 'scene',
                    text: 'Спуститься на первый этаж',
                    sceneId: '6_build_1floor_2L'
                },
                {
                    pitch: 0,
                    yaw: 85,
                    type: 'scene',
                    text: 'Вперёд',
                    sceneId: '6_build_2floor_R2'
                },
                
            ]
        },
    
        '6_build_2floor_L2': {
            title: '6 корпус 2 этаж',
            type: 'equirectangular',
            panorama: 'img/6_build/2_floor/6_build_2floor_L2.jpg',
            pitch: 0, 
            yaw: 90,
            hotSpots: [
                
                {
                    pitch: 0,
                    yaw: -177,
                    type: 'scene',
                    text: 'Вперёд',
                    sceneId: '6_build_2floor_1'
                },
                {
                    pitch: 0,
                    yaw: 3,
                    type: 'scene',
                    text: 'Вперёд',
                    sceneId: '6_build_2floor_L3'
                },
                
            ]
        },
    
        '6_build_2floor_L3': {
            title: '6 корпус 2 этаж',
            type: 'equirectangular',
            panorama: 'img/6_build/2_floor/6_build_2floor_L3.jpg',
            pitch: 0, 
            yaw: 45,
            hotSpots: [
                
                {
                    pitch: -5,
                    yaw: -183,
                    type: 'scene',
                    text: 'Вперёд',
                    sceneId: '6_build_2floor_L2'
                },
                {
                    pitch: -5,
                    yaw: -88,
                    type: 'scene',
                    text: 'Перйти во второй корпус',
                    sceneId: 'Transition_2-6'
                },
                
            ]
        },
        '6_build_2floor_R2': {
            title: '6 корпус 2 этаж',
            type: 'equirectangular',
            panorama: 'img/6_build/2_floor/6_build_2floor_R2.jpg',
            pitch: 0, 
            yaw: 270,
            hotSpots: [
                
                {
                    pitch: 0,
                    yaw: 168,
                    type: 'scene',
                    text: 'Вперёд',
                    sceneId: '6_build_2floor_1'
                },
                {
                    pitch: 0,
                    yaw: -8,
                    type: 'scene',
                    text: 'Перейти на третий этаж',
                    sceneId: '6_build_2floor_R3'
                },
                
                
            ]
        },
        '6_build_2floor_R3': {
            title: '6 корпус 2 этаж',
            type: 'equirectangular',
            panorama: 'img/6_build/2_floor/6_build_2floor_R3.jpg',
            pitch: 0, 
            yaw: 0,
            hotSpots: [
                
                {
                    pitch: -10,
                    yaw: 30,
                    type: 'scene',
                    text: 'Спуститься на первый этаж',
                    sceneId: '6_build_1floor_2R'
                },
                {
                    pitch: -10,
                    yaw: -180,
                    type: 'scene',
                    text: 'Вперёд',
                    sceneId: '6_build_2floor_R2'
                },
                {
                    pitch: -10,
                    yaw: 0,
                    type: 'scene',
                    text: 'Подняться на третий этаж',
                    sceneId: '6_build_3floor_R3'
                },
                
                
            ]
        },

        '6_build_3floor_1': {
            title: '6 корпус 3 этаж',
            type: 'equirectangular',
            panorama: 'img/6_build/3_floor/6_build_3floor_1.jpg',
            pitch: 0, 
            yaw: 0,
            hotSpots: [
                
                {
                    pitch: 0,
                    yaw: 60,
                    type: 'scene',
                    text: 'Вперёд',
                    sceneId: '6_build_3floor_R2'
                },
                {
                    pitch: 0,
                    yaw: -20,
                    type: 'scene',
                    text: 'Подняться на четвёртый этаж',
                    sceneId: '6_build_4floor_1'
                },
                {
                    pitch: 0,
                    yaw: -60,
                    type: 'scene',
                    text: 'Вперёд',
                    sceneId: '6_build_3floor_L2'
                },
                {
                    pitch: 0,
                    yaw: 25,
                    type: 'scene',
                    text: 'Спуститься на второй этаж',
                    sceneId: '6_build_2floor_1'
                },
                
                
            ]
        },
        '6_build_3floor_L2': {
            title: '6 корпус 3 этаж',
            type: 'equirectangular',
            panorama: 'img/6_build/3_floor/6_build_3floor_L2.jpg',
            pitch: 0, 
            yaw: 90,
            hotSpots: [
                
                {
                    pitch: 0,
                    yaw: 0,
                    type: 'scene',
                    text: 'Вперёд',
                    sceneId: '6_build_3floor_L3'
                },
                {
                    pitch: 0,
                    yaw: 177,
                    type: 'scene',
                    text: 'Вперёд',
                    sceneId: '6_build_3floor_1'
                },
                
            ]
        },
        '6_build_3floor_L3': {
            title: '6 корпус 3 этаж',
            type: 'equirectangular',
            panorama: 'img/6_build/3_floor/6_build_3floor_L3.jpg',
            pitch: 0, 
            yaw: 180,
            hotSpots: [
                
                {
                    pitch: 0,
                    yaw: 275,
                    type: 'scene',
                    text: 'Вперёд',
                    sceneId: '6_build_3floor_L2'
                },
                {
                    pitch: 0,
                    yaw: 95,
                    type: 'scene',
                    text: 'Перейти в пятый корпус',
                    sceneId: 'Transition_5-6'
                },
                
            ]
        },
        '6_build_3floor_R2': {
            title: '6 корпус 3 этаж',
            type: 'equirectangular',
            panorama: 'img/6_build/3_floor/6_build_3floor_R2.jpg',
            pitch: 0, 
            yaw: 180,
            hotSpots: [
                
                {
                    pitch: 0,
                    yaw: 168,
                    type: 'scene',
                    text: 'Перейти на четвёртый этаж',
                    sceneId: '6_build_3floor_R3'
                },
                {
                    pitch: 0,
                    yaw: -28,
                    type: 'scene',
                    text: 'Вперёд',
                    sceneId: '6_build_3floor_1'
                },
                
            ]
        },
        '6_build_3floor_R3': {
            title: '6 корпус 3 этаж',
            type: 'equirectangular',
            panorama: 'img/6_build/3_floor/6_build_3floor_R3.jpg',
            pitch: 0, 
            yaw: 140,
            hotSpots: [
                
                {
                    pitch: -10,
                    yaw: 120,
                    type: 'scene',
                    text: 'Подняться на четвёртый этаж',
                    sceneId: '6_build_4floor_R3'
                },
                {
                    pitch: -10,
                    yaw: 150,
                    type: 'scene',
                    text: 'Спуститься на второй этаж',
                    sceneId: '6_build_2floor_R3'
                },
                {
                    pitch: -10,
                    yaw: 0,
                    type: 'scene',
                    text: 'Вперёд',
                    sceneId: '6_build_3floor_R2'
                },
                
            ]
        },
        '6_build_4floor_1': {
            title: '6 корпус 4 этаж',
            type: 'equirectangular',
            panorama: 'img/6_build/4_floor/6_build_4floor_1.jpg',
            pitch: 0, 
            yaw: 0,
            hotSpots: [
                
                
                {
                    pitch: 0,
                    yaw: -20,
                    type: 'scene',
                    text: 'Подняться на пятый этаж',
                    sceneId: '6_build_5floor_1'
                },
                {
                    pitch: 0,
                    yaw: -65,
                    type: 'scene',
                    text: 'Вперёд',
                    sceneId: '6_build_4floor_L2'
                },
                {
                    pitch: 0,
                    yaw: 25,
                    type: 'scene',
                    text: 'Спуститься на третий этаж',
                    sceneId: '6_build_3floor_1'
                },
                
                
            ]
        },
    
        '6_build_4floor_L2': {
            title: '6 корпус 4 этаж',
            type: 'equirectangular',
            panorama: 'img/6_build/4_floor/6_build_4floor_L2.jpg',
            pitch: 0, 
            yaw: 0,
            hotSpots: [
                
                {
                    pitch: 0,
                    yaw: -85,
                    type: 'scene',
                    text: 'Вперёд',
                    sceneId: '6_build_4floor_1'
                },
                {
                    pitch: 0,
                    yaw: 92,
                    type: 'scene',
                    text: 'Вперёд',
                    sceneId: '6_build_4floor_L3'
                },
                
            ]
        },
        '6_build_4floor_L3': {
            title: '6 корпус 4 этаж',
            type: 'equirectangular',
            panorama: 'img/6_build/4_floor/6_build_4floor_L3.jpg',
            pitch: 0, 
            yaw: -90,
            hotSpots: [
                
                {
                    pitch: 0,
                    yaw: -85,
                    type: 'scene',
                    text: 'Вперёд',
                    sceneId: '6_build_4floor_1'
                },
                {
                    pitch: 0,
                    yaw: 92,
                    type: 'scene',
                    text: 'Вперёд',
                    sceneId: '6_build_4floor_L2'
                },
                
            ]
        },
        '6_build_4floor_R2': {
            title: '6 корпус 4 этаж',
            type: 'equirectangular',
            panorama: 'img/6_build/4_floor/6_build_4floor_R2.jpg',
            pitch: 0, 
            yaw: 0,
            hotSpots: [
                
                {
                    pitch: 0,
                    yaw: -15,
                    type: 'scene',
                    text: 'Спуститься на 3 этаж',
                    sceneId: '6_build_4floor_R3'
                },
                {
                    pitch: 0,
                    yaw: 165,
                    type: 'scene',
                    text: 'Вперёд',
                    sceneId: '6_build_5floor_1'
                },
                
            ]
        },
        '6_build_4floor_R3': {
            title: '6 корпус 4 этаж',
            type: 'equirectangular',
            panorama: 'img/6_build/4_floor/6_build_4floor_R3.jpg',
            pitch: 0, 
            yaw: 130,
            hotSpots: [
                
                
                {
                    pitch: -10,
                    yaw: 150,
                    type: 'scene',
                    text: 'Спуститься на третий этаж',
                    sceneId: '6_build_3floor_R3'
                },
                {
                    pitch: -10,
                    yaw: 0,
                    type: 'scene',
                    text: 'Вперёд',
                    sceneId: '6_build_4floor_R2'
                },
                
            ]
        },
        '6_build_5floor_1': {
            title: '6 корпус 5 этаж',
            type: 'equirectangular',
            panorama: 'img/6_build/5_floor/6_build_5floor_1.jpg',
            pitch: 0, 
            yaw: 0,
            hotSpots: [
                
                
                {
                    pitch: 0,
                    yaw: -80,
                    type: 'scene',
                    text: 'Вперёд',
                    sceneId: '6_build_5floor_L2'
                },
                {
                    pitch: 0,
                    yaw: 25,
                    type: 'scene',
                    text: 'Спуститься на четвёртый этаж',
                    sceneId: '6_build_4floor_1'
                },
                {
                    pitch: 0,
                    yaw: 83,
                    type: 'scene',
                    text: 'Перейти на четвёртый этаж',
                    sceneId: '6_build_4floor_R2'
                },
                
                
            ]
        },
        '6_build_5floor_L2': {
            title: '6 корпус 5 этаж',
            type: 'equirectangular',
            panorama: 'img/6_build/5_floor/6_build_5floor_L2.jpg',
            pitch: 0, 
            yaw: 180,
            hotSpots: [
                
                {
                    pitch: -5,
                    yaw: 267,
                    type: 'scene',
                    text: 'Вперёд',
                    sceneId: '6_build_5floor_1'
                },
                {
                    pitch: -5,
                    yaw: 92,
                    type: 'scene',
                    text: 'Вперёд',
                    sceneId: '6_build_5floor_L3'
                },
                
                
            ]
        },
        '6_build_5floor_L3': {
            title: '6 корпус 5 этаж',
            type: 'equirectangular',
            panorama: 'img/6_build/5_floor/6_build_5floor_L3.jpg',
            pitch: 0, 
            yaw: 180,
            hotSpots: [
                
                {
                    pitch: -2,
                    yaw: 1,
                    type: 'scene',
                    text: 'Вперёд',
                    sceneId: '6_build_5floor_L2'
                }
                
                
            ]
        },
        '7_build': {
            title: '7 корпус',
            type: 'equirectangular',
            panorama: 'img/Main_yard/7_build.jpg',
            pitch: 0, 
            yaw: 0,
            hotSpots: [
                {
                    pitch: 0,
                    yaw: -110,
                    type: 'scene',
                    text: 'Вернуться на главный двор',
                    sceneId: 'Main_yard'
                },
                {
                    pitch: 0,
                    yaw: -80,
                    type: 'scene',
                    text: 'Перейти в шестой корпус',
                    sceneId: '6_build'
                },
                {
                    pitch: 0,
                    yaw: 0,
                    type: 'scene',
                    text: 'Зайти в седьмой корпус',
                    sceneId: '7_build_1floor_1'
                },
                {
                    pitch: 0,
                    yaw: -160,
                    type: 'scene',
                    text: 'Перейти в первый корпус',
                    sceneId: '1_build'
                },
                {
                    pitch: 10,
                    yaw: 110,
                    type: 'info',
                    text: 'Восьмой корпус'
                },
                {
                    pitch: 15,
                    yaw: 140,
                    type: 'info',
                    text: 'Девятый корпус'
                },
            ]
        },
        '7_build_1floor_1': {
            title: '7 корпус 1 этаж',
            type: 'equirectangular',
            panorama: 'img/7_build/1_floor/7_build_1floor_1.jpg',
            pitch: 0, 
            yaw: 180,
            hotSpots: [
                
                {
                    pitch: 0,
                    yaw: -10,
                    type: 'scene',
                    text: 'Подняться на второй этаж(ОСПО/Библиотека)',
                    sceneId: '7_build_2floor_MF'
                },
                {
                    pitch: 0,
                    yaw: 35,
                    type: 'scene',
                    text: 'Перейти в шестой корпус',
                    sceneId: 'Transition_6-7'
                },
                {
                    pitch: 0,
                    yaw: 5,
                    type: 'scene',
                    text: 'Выйти из седьмого корпуса',
                    sceneId: '7_build'
                },
                {
                    pitch: 0,
                    yaw: 230,
                    type: 'scene',
                    text: 'Вперёд',
                    sceneId: '7_build_1floor_2'
                },
                {
                    pitch: 0,
                    yaw: 80,
                    type: 'info',
                    text: 'МФСО (многофункциональный студенческий офис)\n---------------------------\nОн служит центром взаимодействия обучающихся (их представителей) со структурными подразделениями вуза. В МФСО студенты могут, например, получить справки, связанные с учёбой',
                },
                
            ]
        },
        '7_build_1floor_2': {
            title: '7 корпус 1 этаж',
            type: 'equirectangular',
            panorama: 'img/7_build/1_floor/7_build_1floor_2.jpg',
            pitch: 0, 
            yaw: 35,
            hotSpots: [
                
                {
                    pitch: -5,
                    yaw: 120,
                    type: 'scene',
                    text: 'Вперёд',
                    sceneId: '7_build_1floor_3'
                },
                {
                    pitch: 0,
                    yaw: 5,
                    type: 'info',
                    text: 'УМС(Управление международного сотрудничества)',
                },
                {
                    pitch: -5,
                    yaw: 270,
                    type: 'scene',
                    text: 'Вперёд',
                    sceneId: '7_build_1floor_1'
                },
                
            ]
        },
        '7_build_1floor_3': {
            title: '7 корпус 1 этаж',
            type: 'equirectangular',
            panorama: 'img/7_build/1_floor/7_build_1floor_3.jpg',
            pitch: 0, 
            yaw: 90,
            hotSpots: [
                
                {
                    pitch: 0,
                    yaw: 187,
                    type: 'scene',
                    text: 'Вперёд',
                    sceneId: '7_build_1floor_2'
                },
                {
                    pitch: -2,
                    yaw: 2,
                    type: 'scene',
                    text: 'Вперёд',
                    sceneId: '7_build_1floor_4'
                }
                
            ]
        },
        '7_build_1floor_4': {
            title: '7 корпус 1 этаж',
            type: 'equirectangular',
            panorama: 'img/7_build/1_floor/7_build_1floor_4.jpg',
            pitch: 0, 
            yaw: 0,
            hotSpots: [
                
                {
                    pitch: 0,
                    yaw: 180,
                    type: 'scene',
                    text: 'Вперёд',
                    sceneId: '7_build_1floor_3'
                },
                {
                    pitch: -10,
                    yaw: 80,
                    type: 'scene',
                    text: 'Перейти в восьмой корпус',
                    sceneId: '8_build_1floor_4'
                },
                {
                    pitch: -2,
                    yaw: 280,
                    type: 'scene',
                    text: 'Подняться на второй этаж',
                    sceneId: '7_build_2floor_1'
                }

                
            ]
        },
        '7_build_2floor_1': {
            title: '7 корпус 2 этаж',
            type: 'equirectangular',
            panorama: 'img/7_build/2_floor/7_build_2floor_1.jpg',
            pitch: 0, 
            yaw: 0,
            hotSpots: [
                
                {
                    pitch: 0,
                    yaw: 170,
                    type: 'info',
                    text: 'Переход в восьмой корпус',
                },
                {
                    pitch: 0,
                    yaw: 85,
                    type: 'scene',
                    text: 'Перейти в восьмой корпус',
                    sceneId: '8_build_2floor_L3'
                },
                {
                    pitch: 0,
                    yaw: 276,
                    type: 'scene',
                    text: 'Вперёд',
                    sceneId: '7_build_2floor_2'
                },

                {
                    pitch: 0,
                    yaw: 10,
                    type: 'scene',
                    text: 'Подняться на третий этаж',
                    sceneId: '7_build_3floor_1'
                },
                {
                    pitch: 0,
                    yaw: -30,
                    type: 'scene',
                    text: 'Спуститься на первый этаж',
                    sceneId: '7_build_1floor_4'
                }

                
            ]
        },
        '7_build_2floor_2': {
            title: '7 корпус 2 этаж',
            type: 'equirectangular',
            panorama: 'img/7_build/2_floor/7_build_2floor_2.jpg',
            pitch: 0, 
            yaw: 0,
            hotSpots: [
                
                {
                    pitch: -5,
                    yaw: 0,
                    type: 'info',
                    text: 'Отдел мобилизационной подготовки\n---------------------------\n Обеспечивает выполнение требований законодательства о воинской обязанности и мобилизации, ведет воинский учет обучающихся и работников, оформляет документы для бронирования и взаимодействует с военными комиссариатами. В отделе также можно получить справку для отсрочки от призыва.',
                },
                {
                    pitch: 0,
                    yaw: 186,
                    type: 'scene',
                    text: 'Вперёд',
                    sceneId: '7_build_2floor_1'
                }
                              
            ]
        },
        '7_build_3floor_1': {
            title: '7 корпус 3 этаж',
            type: 'equirectangular',
            panorama: 'img/7_build/3_floor/7_build_3floor_1.jpg',
            pitch: 0, 
            yaw: 0,
            hotSpots: [
                
                {
                    pitch: 0,
                    yaw: 275,
                    type: 'scene',
                    text: 'Вперёд',
                    sceneId: '7_build_3floor_2'
                },

                {
                    pitch: 0,
                    yaw: 20,
                    type: 'scene',
                    text: 'Подняться на четвёртый этаж',
                    sceneId: '7_build_4floor_1'
                },
                {
                    pitch: 0,
                    yaw: -20,
                    type: 'scene',
                    text: 'Спуститься на второй этаж',
                    sceneId: '7_build_2floor_1'
                }

                
            ]
        },
        '7_build_3floor_2': {
            title: '7 корпус 3 этаж',
            type: 'equirectangular',
            panorama: 'img/7_build/3_floor/7_build_3floor_2.jpg',
            pitch: 0, 
            yaw: -90,
            hotSpots: [
                
                {
                    pitch: 2,
                    yaw: 91,
                    type: 'scene',
                    text: 'Вперёд',
                    sceneId: '7_build_3floor_1'
                }
                              
            ]
        },
        '7_build_4floor_1': {
            title: '7 корпус 4 этаж',
            type: 'equirectangular',
            panorama: 'img/7_build/4_floor/7_build_4floor_1.jpg',
            pitch: 5, 
            yaw: 0,
            hotSpots: [
                
                {
                    pitch: 0,
                    yaw: 270,
                    type: 'info',
                    text: 'Учебные аудитории',
                },

                {
                    pitch: -5,
                    yaw: -13,
                    type: 'scene',
                    text: 'Спуститься на третий этаж',
                    sceneId: '7_build_3floor_1'
                }

                
            ]
        },
        '7_build_2floor_MF': {
            title: '7 корпус 2 этаж',
            type: 'equirectangular',
            panorama: 'img/7_build/2_floor/7_build_2floor_MF.jpg',
            pitch: 0, 
            yaw: 0,
            hotSpots: [
                
                {
                    pitch: -5,
                    yaw: -10,
                    type: 'scene',
                    text: 'Подняться на второй этаж(библиотека)',
                    sceneId: '7_build_3floor_Lib'
                },
                {
                    pitch: -5,
                    yaw: 10,
                    type: 'scene',
                    text: 'Спуститься на первый этаж',
                    sceneId: '7_build_1floor_1'
                },
                
                {
                    pitch: -10,
                    yaw: -90,
                    type: 'info',
                    text: 'Отдел сопровождения платного обучения (ОСПО) \n------------------------------\n Предоставляет информацию о платных образовательных услугах, информирует студентов о возможном отчислении при отсутствии оплаты, оформляет документы для образовательного кредита и оплаты через материнский (семейный) капитал, готовит проекты приказов об отчислении за просрочку оплаты и размещает в личных кабинетах студентов приказы о стоимости обучения и инструкции по оплате.',
                },
                
            ]
        },
        '7_build_3floor_Lib': {
            title: '7 корпус 2 этаж',
            type: 'equirectangular',
            panorama: 'img/7_build/3_floor/7_build_3floor_Lib.jpg',
            pitch: 0, 
            yaw: 0,
            hotSpots: [
                
                {
                    pitch: -5,
                    yaw: -10,
                    type: 'info',
                    text: 'Библиотека(4-5 этажи)',
                },
                {
                    pitch: -5,
                    yaw: 10,
                    type: 'scene',
                    text: 'Спуститься на второй этаж',
                    sceneId: '7_build_2floor_MF'
                },
                
                {
                    pitch: 0,
                    yaw: -90,
                    type: 'scene',
                    text: 'Зайти в библиотеку',
                    sceneId: '7_build_2floor_Lib2'
                },
                {
                    pitch: -5,
                    yaw: -60,
                    type: 'info',
                    text: 'Библиотека\n---------------------------\n Предоставляет бесплатный доступ к большому фонду печатных и электронных изданий: учебной, научной, учебно-методической, технической и справочной литературы. В фонде имеются монографии, учебники, диссертации, периодика, энциклопедии и словари по разным направлениям обучения. Для пользователей доступны абонемент, читальный зал и компьютерный класс с интернетом.',
                },
                
            ]
        },
        '7_build_3floor_Lib': {
            title: '7 корпус 3 этаж',
            type: 'equirectangular',
            panorama: 'img/7_build/3_floor/7_build_3floor_Lib.jpg',
            pitch: 0, 
            yaw: 0,
            hotSpots: [
                
                {
                    pitch: -5,
                    yaw: -10,
                    type: 'info',
                    text: 'Библиотека(4-5 этажи)',
                },
                {
                    pitch: -5,
                    yaw: 10,
                    type: 'scene',
                    text: 'Спуститься на второй этаж',
                    sceneId: '7_build_2floor_MF'
                },
                
                {
                    pitch: -5,
                    yaw: -90,
                    type: 'scene',
                    text: 'Зайти в библиотеку',
                    sceneId: '7_build_3floor_Lib2'
                },
                {
                    pitch: -5,
                    yaw: -60,
                    type: 'info',
                    text: 'Библиотека\n---------------------------\n Предоставляет бесплатный доступ к большому фонду печатных и электронных изданий: учебной, научной, учебно-методической, технической и справочной литературы. В фонде имеются монографии, учебники, диссертации, периодика, энциклопедии и словари по разным направлениям обучения. Для пользователей доступны абонемент, читальный зал и компьютерный класс с интернетом.',
                    sceneId: '7_build_2floor_Lib2'
                },
                
            ]
        },
        '7_build_3floor_Lib2': {
            title: 'Библиотека',
            type: 'equirectangular',
            panorama: 'img/7_build/3_floor/7_build_3floor_Lib2.jpg',
            pitch: 0, 
            yaw: -90,
            hotSpots: [
                
                {
                    pitch: 0,
                    yaw: 0,
                    type: 'info',
                    text: 'Читальный зал',
                },
                {
                    pitch: 0,
                    yaw: 17,
                    type: 'scene',
                    text: 'Выйти из библиотеки',
                    sceneId: '7_build_3floor_Lib'
                },
                
                {
                    pitch: 0,
                    yaw: 190,
                    type: 'scene',
                    text: 'Зайти в читальный зал',
                    sceneId: '7_build_3floor_Lib3'
                },
                
            ]
        },
        '7_build_3floor_Lib3': {
            title: 'Читальный зал',
            type: 'equirectangular',
            panorama: 'img/7_build/3_floor/7_build_3floor_Lib3.jpg',
            pitch: 0, 
            yaw: 180,
            hotSpots: [
                
                {
                    pitch: 0,
                    yaw: -7,
                    type: 'scene',
                    text: 'Выйти из читального зала',
                    sceneId: '7_build_3floor_Lib2'
                },
                
                
            ]
        },
        '8_build_1floor_6': {
            title: '8 корпус 1 этаж',
            type: 'equirectangular',
            panorama: 'img/8_build/1_floor/8_build_1floor_6.jpg',
            pitch: 0, 
            yaw: 180,
            hotSpots: [
                {
                    pitch: 0,
                    yaw: 93,
                    type: 'scene',
                    text: 'Подняться на второй этаж',
                    sceneId: '8_build_2floor_1'
                },
                {
                    pitch: 0,
                    yaw: -93,
                    type: 'scene',
                    text: 'Подняться на второй этаж',
                    sceneId: '8_build_2floor_1'
                },
                {
                    pitch: 0,
                    yaw: -85,
                    type: 'scene',
                    text: 'Цокольный этаж',
                    sceneId: '8_build_1floor_5'
                },
                {
                    pitch: 0,
                    yaw: 85,
                    type: 'scene',
                    text: 'Цокольный этаж',
                    sceneId: '8_build_1floor_5'
                },
            ]
        },
        '8_build_1floor_5': {
            title: '8 корпус 1 этаж',
            type: 'equirectangular',
            panorama: 'img/8_build/1_floor/8_build_1floor_5.jpg',
            pitch: 0, 
            yaw: 0,
            hotSpots: [
                {
                    pitch: 5,
                    yaw: -94,
                    type: 'scene',
                    text: 'Вперёд',
                    sceneId: '8_build_1floor_3'
                },
                {
                    pitch: 3,
                    yaw: -5,
                    type: 'scene',
                    text: 'Подняться',
                    sceneId: '8_build_1floor_6'
                },
            ]
        },
        '8_build_1floor_4': {
            title: '8 корпус 1 этаж',
            type: 'equirectangular',
            panorama: 'img/8_build/1_floor/8_build_1floor_4.jpg',
            pitch: 0, 
            yaw: 0,
            hotSpots: [
                {
                    pitch: 0,
                    yaw: 92,
                    type: 'scene',
                    text: 'Перейти в седьмой корпус',
                    sceneId: '7_build_1floor_4'
                },
                {
                    pitch: -2,
                    yaw: -85,
                    type: 'scene',
                    text: 'Вперёд',
                    sceneId: '8_build_1floor_3'
                },
            ]
        },
        '8_build_1floor_3': {
            title: '8 корпус 1 этаж',
            type: 'equirectangular',
            panorama: 'img/8_build/1_floor/8_build_1floor_3.jpg',
            pitch: 0, 
            yaw: 180,
            hotSpots: [
                {
                    pitch: -2,
                    yaw: 105,
                    type: 'scene',
                    text: 'Вперёд',
                    sceneId: '8_build_1floor_2'
                },
                {
                    pitch: -2,
                    yaw: 1,
                    type: 'scene',
                    text: 'Вперёд',
                    sceneId: '8_build_1floor_5'
                },
                {
                    pitch: 0,
                    yaw: -83,
                    type: 'scene',
                    text: 'Вперёд',
                    sceneId: '8_build_1floor_4'
                },
                {
                    pitch: -5,
                    yaw: 150,
                    type: 'info',
                    text: 'Команда UGATU Racing Team\n------------------------------\nМолодёжная инженерно-гоночная команда студентов УУНиТ, развивающая авто-мото спорт в РБ и участвующая в международных соревнованиях Formula SAE, Shell Eco Marathon, Drag Racing, SmartMoto Challenge и других авто-мото мероприятиях.',
                },
                {
                    pitch: -5,
                    yaw: 70,
                    type: 'info',
                    text: 'Бюст Серго Орджоникидзе\n--------------------------------\nработа известных грузинских скульпторов Мирабишвили. Сегодня бюст стал символом университета: существует традиция прикладывать к нему зачетку перед экзаменом на удачу, а фраза «встретимся у Орджоникидзе» понятна каждому студенту. Раньше здесь назначали свидания, и эта красивая легенда сохраняется до сих пор.',
                },
            ]
        },
        '8_build_1floor_2': {
            title: '8 корпус 1 этаж',
            type: 'equirectangular',
            panorama: 'img/8_build/1_floor/8_build_1floor_2.jpg',
            pitch: 0, 
            yaw: -90,
            hotSpots: [
                {
                    pitch: -2,
                    yaw: 95,
                    type: 'scene',
                    text: 'Перейти в первый/девятый корпус',
                    sceneId: '8_build_1floor_1'
                },
                {
                    pitch: 0,
                    yaw: -55,
                    type: 'scene',
                    text: 'Вперёд',
                    sceneId: '8_build_1floor_3'
                },
                {
                    pitch: -5,
                    yaw: -80,
                    type: 'info',
                    text: 'Команда UGATU Racing Team\n------------------------------\nМолодёжная инженерно-гоночная команда студентов УУНиТ, развивающая авто-мото спорт в РБ и участвующая в международных соревнованиях Formula SAE, Shell Eco Marathon, Drag Racing, SmartMoto Challenge и других авто-мото мероприятиях.',
                },
                {
                    pitch: -5,
                    yaw: -40,
                    type: 'info',
                    text: 'Бюст Серго Орджоникидзе\n--------------------------------\nработа известных грузинских скульпторов Мирабишвили. Сегодня бюст стал символом университета: существует традиция прикладывать к нему зачетку перед экзаменом на удачу, а фраза «встретимся у Орджоникидзе» понятна каждому студенту. Раньше здесь назначали свидания, и эта красивая легенда сохраняется до сих пор.',
                },
            ]
        },
        '8_build_1floor_1': {
            title: '8 корпус 1 этаж',
            type: 'equirectangular',
            panorama: 'img/8_build/1_floor/8_build_1floor_1.jpg',
            pitch: 0, 
            yaw: 0,
            hotSpots: [
                {
                    pitch: -2,
                    yaw: 88,
                    type: 'scene',
                    text: 'Перейти в восьмой корпус',
                    sceneId: '8_build_1floor_2'
                },
                {
                    pitch: 20,
                    yaw: -3,
                    type: 'scene',
                    text: 'Перейти в первый/девятый корпус',
                    sceneId: 'Transition_8-19'
                },
            ]
        },
        '8_build_2floor_1': {
            title: '8 корпус 2 этаж',
            type: 'equirectangular',
            panorama: 'img/8_build/2_floor/8_build_2floor_1.jpg',
            pitch: 0, 
            yaw: 0,
            hotSpots: [
                {
                    pitch: 0,
                    yaw: 93,
                    type: 'scene',
                    text: 'Подняться на третий этаж',
                    sceneId: '8_build_3floor_L'
                },
                {
                    pitch: 0,
                    yaw: -93,
                    type: 'scene',
                    text: 'Подняться на третий этаж',
                    sceneId: '8_build_3floor_R'
                },
                {
                    pitch: -3,
                    yaw: -80,
                    type: 'scene',
                    text: 'Спуститься на первый этаж',
                    sceneId: '8_build_1floor_6'
                },
                {
                    pitch: -3,
                    yaw: 85,
                    type: 'scene',
                    text: 'Спуститься на первый этаж',
                    sceneId: '8_build_1floor_6'
                },
                {
                    pitch: -3,
                    yaw: -70,
                    type: 'scene',
                    text: 'Вперёд',
                    sceneId: '8_build_2floor_L2'
                },
                {
                    pitch: -3,
                    yaw: 75 ,
                    type: 'scene',
                    text: 'Вперёд',
                    sceneId: '8_build_2floor_R2'
                },  
            ]
        },
        '8_build_3floor_L': {
            title: '8 корпус 3 этаж',
            type: 'equirectangular',
            panorama: 'img/8_build/3_floor/8_build_3floor_L.jpg',
            pitch: 0, 
            yaw: 0,
            hotSpots: [
                {
                    pitch: 5,
                    yaw: 15,
                    type: 'scene',
                    text: 'Подняться на четвёртый этаж',
                    sceneId: '8_build_4floor_L'
                },
                {
                    pitch: -15,
                    yaw: -10,
                    type: 'scene',
                    text: 'Спуститься на второй этаж',
                    sceneId: '8_build_2floor_1'
                },
            ]
        },
        '8_build_3floor_R': {
            title: '8 корпус 3 этаж',
            type: 'equirectangular',
            panorama: 'img/8_build/3_floor/8_build_3floor_R.jpg',
            pitch: 0, 
            yaw: 0,
            hotSpots: [
                {
                    pitch: 5,
                    yaw: -10,
                    type: 'scene',
                    text: 'Подняться на четвёртый этаж',
                    sceneId: '8_build_4floor_R'
                },
                {
                    pitch: -15,
                    yaw: 15,
                    type: 'scene',
                    text: 'Спуститься на второй этаж',
                    sceneId: '8_build_2floor_1'
                },
            ]
        },
        '8_build_4floor_R': {
            title: '8 корпус 4 этаж',
            type: 'equirectangular',
            panorama: 'img/8_build/4_floor/8_build_4floor_R.jpg',
            pitch: 0, 
            yaw: 0,
            hotSpots: [
                {
                    pitch: 5,
                    yaw: -10,
                    type: 'scene',
                    text: 'Подняться на пятый этаж',
                    sceneId: '8_build_5floor_R'
                },
                {
                    pitch: -15,
                    yaw: 15,
                    type: 'scene',
                    text: 'Спуститься на третий этаж',
                    sceneId: '8_build_3floor_R'
                },
            ]
        },
        '8_build_4floor_L': {
            title: '8 корпус 4 этаж',
            type: 'equirectangular',
            panorama: 'img/8_build/4_floor/8_build_4floor_L.jpg',
            pitch: 0, 
            yaw: 0,
            hotSpots: [
                {
                    pitch: 5,
                    yaw: 12,
                    type: 'scene',
                    text: 'Подняться на пятый этаж',
                    sceneId: '8_build_5floor_L'
                },
                {
                    pitch: -15,
                    yaw: -15,
                    type: 'scene',
                    text: 'Спуститься на третий этаж',
                    sceneId: '8_build_3floor_L'
                },
            ]
        },
        '8_build_5floor_L': {
            title: '8 корпус 5 этаж',
            type: 'equirectangular',
            panorama: 'img/8_build/5_floor/8_build_5floor_L.jpg',
            pitch: 0, 
            yaw: 0,
            hotSpots: [
                
                {
                    pitch: -15,
                    yaw: -15,
                    type: 'scene',
                    text: 'Спуститься на четвёртый этаж',
                    sceneId: '8_build_4floor_L'
                },
                {
                    pitch: -0,
                    yaw: -60,
                    type: 'scene',
                    text: 'Вперёд',
                    sceneId: '8_build_5floor_L2'
                },
                {
                    pitch: -0,
                    yaw: -120,
                    type: 'scene',
                    text: 'Вперёд',
                    sceneId: '8_build_5floor_R2'
                },
                {
                    pitch: -0,
                    yaw: -90,
                    type: 'info',
                    text: 'Лицей №153 \n------------------------------------\n Муниципальное учреждение, созданное в 1991 году как авиационно-техническая школа-лицей при авиационном институте. Основное направление - подготовка к поступлению в технические вузы с углублённым изучением точных наук и инженерии. Лицей тесно сотрудничает с университетом: уроки ведут преподаватели вуза, а лицеисты пользуются научными лабораториями.',
                },
            ]
        },
        '8_build_5floor_L2': {
            title: '8 корпус 5 этаж',
            type: 'equirectangular',
            panorama: 'img/8_build/5_floor/8_build_5floor_L2.jpg',
            pitch: 0, 
            yaw: 0,
            hotSpots: [

                {
                    pitch: -4,
                    yaw: 107,
                    type: 'scene',
                    text: 'Вернуться',
                    sceneId: '8_build_5floor_L'
                },
            ]
        },
        '8_build_5floor_R2': {
            title: '8 корпус 5 этаж',
            type: 'equirectangular',
            panorama: 'img/8_build/5_floor/8_build_5floor_R2.jpg',
            pitch: 0, 
            yaw: 90,
            hotSpots: [

                {
                    pitch: -4,
                    yaw: 5,
                    type: 'scene',
                    text: 'Вперёд',
                    sceneId: '8_build_5floor_L'
                },
                {
                    pitch: -4,
                    yaw: 170,
                    type: 'scene',
                    text: 'Вперёд',
                    sceneId: '8_build_5floor_R'
                },
            ]
        },
        
        '8_build_5floor_R': {
            title: '8 корпус 5 этаж',
            type: 'equirectangular',
            panorama: 'img/8_build/5_floor/8_build_5floor_R.jpg',
            pitch: 0, 
            yaw: 0,
            hotSpots: [
                {
                    pitch: -15,
                    yaw: 12,
                    type: 'scene',
                    text: 'Спуститься на четвёртый этаж',
                    sceneId: '8_build_4floor_R'
                },
                {
                    pitch: 0,
                    yaw: 130,
                    type: 'scene',
                    text: 'Вперёд',
                    sceneId: '8_build_5floor_R2'
                },
            
            ]
        },
        '8_build_2floor_L2': {
            title: '8 корпус 2 этаж',
            type: 'equirectangular',
            panorama: 'img/8_build/2_floor/8_build_2floor_L2.jpg',
            pitch: 0, 
            yaw: -90,
            hotSpots: [
                {
                    pitch: 0,
                    yaw: 3,
                    type: 'scene',
                    text: 'Вперёд',
                    sceneId: '8_build_2floor_L3'
                },
                {
                    pitch: 0,
                    yaw: -160,
                    type: 'scene',
                    text: 'Вперёд',
                    sceneId: '8_build_2floor_1'
                },
            
            ]
        },
        '8_build_2floor_L3': {
            title: '8 корпус 2 этаж',
            type: 'equirectangular',
            panorama: 'img/8_build/2_floor/8_build_2floor_L3.jpg',
            pitch: 0, 
            yaw: 0,
            hotSpots: [
                {
                    pitch: -3,
                    yaw: -90,
                    type: 'scene',
                    text: 'Вперёд',
                    sceneId: '8_build_2floor_L2'
                },
                {
                    pitch: -3,
                    yaw: 0,
                    type: 'scene',
                    text: 'Перейти в седьмой корпус',
                    sceneId: '7_build_2floor_1'
                },
            
            ]
        },
        '8_build_2floor_R2': {
            title: '8 корпус 2 этаж',
            type: 'equirectangular',
            panorama: 'img/8_build/2_floor/8_build_2floor_R2.jpg',
            pitch: 0, 
            yaw: 90,
            hotSpots: [
                {
                    pitch: -2,
                    yaw: 0,
                    type: 'scene',
                    text: 'Вперёд',
                    sceneId: '8_build_2floor_R3'
                },
                {
                    pitch: 0,
                    yaw: 160,
                    type: 'scene',
                    text: 'Вперёд',
                    sceneId: '8_build_2floor_1'
                },
            
            ]
        },
        '8_build_2floor_R3': {
            title: '8 корпус 2 этаж',
            type: 'equirectangular',
            panorama: 'img/8_build/2_floor/8_build_2floor_R3.jpg',
            pitch: 0, 
            yaw: 180,
            hotSpots: [
                {
                    pitch: 0,
                    yaw: 0,
                    type: 'scene',
                    text: 'Вперёд',
                    sceneId: '8_build_2floor_R2'
                },
                {
                    pitch: 0,
                    yaw: 220,
                    type: 'scene',
                    text: 'Перейти в девятый корпус',
                    sceneId: '9_build_3floor_R2'
                },
            
            ]
        },
        'Transition_8-19': {
            title: 'Переход между корпусами',
            type: 'equirectangular',
            panorama: 'img/8_build/1_floor/Transition_8-19.jpg',
            pitch: 0, 
            yaw: 90,
            hotSpots: [
                {
                    pitch: 0,
                    yaw: 30,
                    type: 'scene',
                    text: 'Перейти в восьмой корпус',
                    sceneId: '8_build_1floor_1'
                },
                {
                    pitch: 0,
                    yaw: 145,
                    type: 'scene',
                    text: 'Перейти в девятый/первый корпус',
                    sceneId: 'Transition_1-8-9' 
                },
            ]
        },
        'Transition_1-8-9': {
            title: 'Переход между корпусами',
            type: 'equirectangular',
            panorama: 'img/1_build/2_floor/Transition_1-8-9.jpg',
            pitch: 0, 
            yaw: 90,
            hotSpots: [
                {
                    pitch: -5,
                    yaw: 65,
                    type: 'scene',
                    text: 'Перейти в девятый корпус',
                    sceneId: 'Transition_9-18'
                },
                {
                    pitch: -10,
                    yaw: -113,
                    type: 'scene',
                    text: 'Перейти в восьмой корпус',
                    sceneId: 'Transition_8-19'
                },
                {
                    pitch: -5,
                    yaw: 155,
                    type: 'scene',
                    text: 'Перейти в первый корпус',
                    sceneId: 'Transition_1-89' 
                },
            ]
        },
        'Transition_9-18': {
            title: 'Переход между корпусами',
            type: 'equirectangular',
            panorama: 'img/9_build/2_floor/Transition_9-18.jpg',
            pitch: 0, 
            yaw: 90,
            hotSpots: [
                {
                    pitch: 0,
                    yaw: -150,
                    type: 'scene',
                    text: 'Перейти в девятый корпус',
                    sceneId: '9_build_2floor_L3'
                },
                {
                    pitch: 0,
                    yaw: -15,
                    type: 'scene',
                    text: 'Перейти в первый/восьмой корпус',
                    sceneId: 'Transition_1-8-9'
                },
            ]
        },
        '9_build_2floor_L3': {
            title: '9 корпус 2 этаж',
            type: 'equirectangular',
            panorama: 'img/9_build/2_floor/9_build_2floor_L3.jpg',
            pitch: 0, 
            yaw: 0,
            hotSpots: [
                {
                    pitch: 5,
                    yaw: -4,
                    type: 'scene',
                    text: 'Перейти в первый/восьмой корпус',
                    sceneId: 'Transition_9-18'
                },
                {
                    pitch: -25,
                    yaw: -25,
                    type: 'scene',
                    text: 'Спуститься на первый этаж',
                    sceneId: '9_build_1floor_L2'
                },
                {
                    pitch: -5,
                    yaw: 85,
                    type: 'scene',
                    text: 'Вперёд',
                    sceneId: '9_build_2floor_L2'
                },
                
            ]
        },
        '9_build_1floor_L2': {
            title: '9 корпус 1 этаж',
            type: 'equirectangular',
            panorama: 'img/9_build/1_floor/9_build_1floor_L2.jpg',
            pitch: 0, 
            yaw: 90,
            hotSpots: [
                {
                    pitch: -5,
                    yaw: -2,
                    type: 'scene',
                    text: 'Подняться на второй этаж',
                    sceneId: '9_build_2floor_L3'
                },
                {
                    pitch: -3,
                    yaw: -180,
                    type: 'scene',
                    text: 'Вперёд',
                    sceneId: '9_build_1floor_1'
                },
            ]
        },
        '9_build_1floor_1': {
            title: '9 корпус 1 этаж',
            type: 'equirectangular',
            panorama: 'img/9_build/1_floor/9_build_1floor_1.jpg',
            pitch: 0, 
            yaw: 0,
            hotSpots: [
                {
                    pitch: 3,
                    yaw: -20,
                    type: 'scene',
                    text: 'Подняться на второй этаж',
                    sceneId: '9_build_2floor_1'
                },
                {
                    pitch: 1,
                    yaw: -55,
                    type: 'scene',
                    text: 'Вперёд',
                    sceneId: '9_build_1floor_L2'
                },
                {
                    pitch: 1,
                    yaw: 130,
                    type: 'scene',
                    text: 'Вперёд',
                    sceneId: '9_build_1floor_2'
                },
            ]
        },
        '9_build_2floor_1': {
            title: '9 корпус 2 этаж',
            type: 'equirectangular',
            panorama: 'img/9_build/2_floor/9_build_2floor_1.jpg',
            pitch: 0, 
            yaw: 0,
            hotSpots: [
                {
                    pitch: 3,
                    yaw: -10,
                    type: 'scene',
                    text: 'Подняться на третий этаж',
                    sceneId: '9_build_3floor_1'
                },
                {
                    pitch: -8,
                    yaw: 20,
                    type: 'scene',
                    text: 'Спуститься на первый этаж',
                    sceneId: '9_build_1floor_1'
                },
                {
                    pitch: 1,
                    yaw: -48,
                    type: 'scene',
                    text: 'Вперёд',
                    sceneId: '9_build_2floor_L2'
                },
                {
                    pitch: 1,
                    yaw: 140,
                    type: 'scene',
                    text: 'Вперёд',
                    sceneId: '9_build_2floor_2'
                },
            ]
        },
        '9_build_3floor_1': {
            title: '9 корпус 3 этаж',
            type: 'equirectangular',
            panorama: 'img/9_build/3_floor/9_build_3floor_1.jpg',
            pitch: 0, 
            yaw: 0,
            hotSpots: [
                {
                    pitch: 3,
                    yaw: -15,
                    type: 'scene',
                    text: 'Подняться на четвёртый этаж',
                    sceneId: '9_build_4floor_1'
                },
                {
                    pitch: -10,
                    yaw: 15,
                    type: 'scene',
                    text: 'Спуститься на второй этаж',
                    sceneId: '9_build_2floor_1'
                },
                {
                    pitch: 1,
                    yaw: -55,
                    type: 'scene',
                    text: 'Вперёд',
                    sceneId: '9_build_3floor_L2'
                },
                {
                    pitch: 1,
                    yaw: 145,
                    type: 'scene',
                    text: 'Вперёд',
                    sceneId: '9_build_3floor_2'
                },
                {
                    pitch: 1,
                    yaw: 80,
                    type: 'scene',
                    text: 'Вперёд',
                    sceneId: '9_build_3floor_R2'
                },
            ]
        },
        '9_build_3floor_R2': {
            title: '9 корпус 3 этаж',
            type: 'equirectangular',
            panorama: 'img/9_build/3_floor/9_build_3floor_R2.jpg',
            pitch: 0, 
            yaw: 0,
            hotSpots: [
                
                {
                    pitch: 0,
                    yaw: -90,
                    type: 'scene',
                    text: 'Вперёд',
                    sceneId: '9_build_3floor_1'
                },
                {
                    pitch: 0,
                    yaw: 0,
                    type: 'scene',
                    text: 'Перейти в восьмой корпус',
                    sceneId: '8_build_2floor_R3'
                },
                
            ]
        },
        '9_build_3floor_2': {
            title: '9 корпус 3 этаж',
            type: 'equirectangular',
            panorama: 'img/9_build/3_floor/9_build_3floor_2.jpg',
            pitch: 0, 
            yaw: -40,
            hotSpots: [
                
                {
                    pitch: 0,
                    yaw: 138,
                    type: 'scene',
                    text: 'Вперёд',
                    sceneId: '9_build_3floor_1'
                },
                {
                    pitch: 0,
                    yaw: -40,
                    type: 'scene',
                    text: 'Подняться на четвёртый этаж',
                    sceneId: '9_build_4floor_2'
                },
                {
                    pitch: -5,
                    yaw: -50,
                    type: 'scene',
                    text: 'Спуститься на второй этаж',
                    sceneId: '9_build_2floor_2'
                },
                
            ]
        },
        '9_build_3floor_L2': {
            title: '9 корпус 3 этаж',
            type: 'equirectangular',
            panorama: 'img/9_build/3_floor/9_build_3floor_L2.jpg',
            pitch: 0, 
            yaw: 0,
            hotSpots: [
                
                {
                    pitch: -2,
                    yaw: 183    ,
                    type: 'scene',
                    text: 'Вперёд',
                    sceneId: '9_build_3floor_1'
                },
                
            ]
        },
        '9_build_2floor_L2': {
            title: '9 корпус 2 этаж',
            type: 'equirectangular',
            panorama: 'img/9_build/2_floor/9_build_2floor_L2.jpg',
            pitch: 0, 
            yaw: -90,
            hotSpots: [
                
                {
                    pitch: -3,
                    yaw: 0,
                    type: 'scene',
                    text: 'Вперёд',
                    sceneId: '9_build_2floor_1'
                },
                {
                    pitch: 0,
                    yaw: 180,
                    type: 'scene',
                    text: 'Вперёд',
                    sceneId: '9_build_2floor_L3'
                },
            ]
        },
        '9_build_4floor_1': {
            title: '9 корпус 4 этаж',
            type: 'equirectangular',
            panorama: 'img/9_build/4_floor/9_build_4floor_1.jpg',
            pitch: 0, 
            yaw: 0,
            hotSpots: [
                {
                    pitch: 3,
                    yaw: -15,
                    type: 'scene',
                    text: 'Подняться на пятый этаж',
                    sceneId: '9_build_5floor_1'
                },
                {
                    pitch: -10,
                    yaw: 15,
                    type: 'scene',
                    text: 'Спуститься на третий этаж',
                    sceneId: '9_build_3floor_1'
                },
                {
                    pitch: 1,
                    yaw: -50,
                    type: 'scene',
                    text: 'Вперёд',
                    sceneId: '9_build_4floor_L2'
                },
                {
                    pitch: 1,
                    yaw: 145,
                    type: 'scene',
                    text: 'Вперёд',
                    sceneId: '9_build_4floor_2'
                },
                
            ]
        },
        '9_build_5floor_1': {
            title: '9 корпус 5 этаж',
            type: 'equirectangular',
            panorama: 'img/9_build/5_floor/9_build_5floor_1.jpg',
            pitch: 0, 
            yaw: 0,
            hotSpots: [
                {
                    pitch: 3,
                    yaw: -15,
                    type: 'scene',
                    text: 'Подняться на шестой этаж',
                    sceneId: '9_build_6floor_1'
                },
                {
                    pitch: -10,
                    yaw: 15,
                    type: 'scene',
                    text: 'Спуститься на четвёртый этаж',
                    sceneId: '9_build_4floor_1'
                },
                {
                    pitch: 0,
                    yaw: 140,
                    type: 'scene',
                    text: 'Вперёд',
                    sceneId: '9_build_5floor_2'
                },
                
            ]
        },
        '9_build_6floor_1': {
            title: '9 корпус 6 этаж',
            type: 'equirectangular',
            panorama: 'img/9_build/6_floor/9_build_6floor_1.jpg',
            pitch: 0, 
            yaw: 0,
            hotSpots: [
                {
                    pitch: -12,
                    yaw: 3,
                    type: 'scene',
                    text: 'Спуститься на пятый этаж',
                    sceneId: '9_build_5floor_1'
                },
                {
                    pitch: -4,
                    yaw: 150,
                    type: 'scene',
                    text: 'Вперёд',
                    sceneId: '9_build_6floor_2'
                },
                
            ]
        },
        '9_build_6floor_2': {
            title: '9 корпус 6 этаж',
            type: 'equirectangular',
            panorama: 'img/9_build/6_floor/9_build_6floor_2.jpg',
            pitch: 0, 
            yaw: 0,
            hotSpots: [
                {
                    pitch: -3,
                    yaw: 190,
                    type: 'scene',
                    text: 'Вперёд',
                    sceneId: '9_build_6floor_1'
                },
                {
                    pitch: -5,
                    yaw: 3,
                    type: 'scene',
                    text: 'Спуститься на пятый этаж',
                    sceneId: '9_build_5floor_2'
                },
                
            ]
        },
        '9_build_5floor_2': {
            title: '9 корпус 5 этаж',
            type: 'equirectangular',
            panorama: 'img/9_build/5_floor/9_build_5floor_2.jpg',
            pitch: 0, 
            yaw: 0,
            hotSpots: [
            
                {
                    pitch: 0,
                    yaw: 190,
                    type: 'scene',
                    text: 'Вперёд',
                    sceneId: '9_build_5floor_1'
                },
                {
                    pitch: -5,
                    yaw: 3,
                    type: 'scene',
                    text: 'Спуститься на четвёртый этаж',
                    sceneId: '9_build_4floor_2'
                },
                {
                    pitch: 0,
                    yaw: 15,
                    type: 'scene',
                    text: 'Подняться на шестой этаж',
                    sceneId: '9_build_6floor_2'
                },
            ]
        },
        '9_build_4floor_2': {
            title: '9 корпус 4 этаж',
            type: 'equirectangular',
            panorama: 'img/9_build/4_floor/9_build_4floor_2.jpg',
            pitch: 0, 
            yaw: 0,
            hotSpots: [
            
                {
                    pitch: 0,
                    yaw: 190,
                    type: 'scene',
                    text: 'Вперёд',
                    sceneId: '9_build_4floor_1'
                },
                {
                    pitch: -5,
                    yaw: -5,
                    type: 'scene',
                    text: 'Спуститься на третий этаж',
                    sceneId: '9_build_3floor_2'
                },
                {
                    pitch: 0,
                    yaw: 5,
                    type: 'scene',
                    text: 'Подняться на пятый этаж',
                    sceneId: '9_build_5floor_2'
                },
            ]
        },
        '9_build_4floor_L2': {
            title: '9 корпус 4 этаж',
            type: 'equirectangular',
            panorama: 'img/9_build/4_floor/9_build_4floor_L2.jpg',
            pitch: 0, 
            yaw: 90,
            hotSpots: [
                {
                    pitch: 0,
                    yaw: 0,
                    type: 'scene',
                    text: 'Вперёд',
                    sceneId: '9_build_4floor_1'
                },
                {
                    pitch: -1,
                    yaw: 180,
                    type: 'scene',
                    text: 'Вперёд',
                    sceneId: '9_build_4floor_L3'
                },
            
                
            ]
        },
        '9_build_4floor_L3': {
            title: '9 корпус 4 этаж',
            type: 'equirectangular',
            panorama: 'img/9_build/4_floor/9_build_4floor_L3.jpg',
            pitch: 0, 
            yaw: 0,
            hotSpots: [
                {
                    pitch: -3,
                    yaw: -88,
                    type: 'scene',
                    text: 'Вперёд',
                    sceneId: '9_build_4floor_L2'
                },
                {
                    pitch: 3,
                    yaw: 5,
                    type: 'scene',
                    text: 'Вперёд',
                    sceneId: '9_build_5floor_L3'
                },
                
            
                
            ]
        },
        '9_build_5floor_L3': {
            title: '9 корпус 5 этаж',
            type: 'equirectangular',
            panorama: 'img/9_build/5_floor/9_build_5floor_L3.jpg',
            pitch: 0, 
            yaw: 0,
            hotSpots: [
                
                {
                    pitch: -10,
                    yaw: -7,
                    type: 'scene',
                    text: 'Вперёд',
                    sceneId: '9_build_4floor_L3'
                },
                
            
                
            ]
        },
        '9_build_2floor_2': {
            title: '9 корпус 2 этаж',
            type: 'equirectangular',
            panorama: 'img/9_build/2_floor/9_build_2floor_2.jpg',
            pitch: 0, 
            yaw: 0,
            hotSpots: [
                
                {
                    pitch: 0,
                    yaw: 180,
                    type: 'scene',
                    text: 'Вперёд',
                    sceneId: '9_build_2floor_1'
                },
                {
                    pitch: -5,
                    yaw: -10,
                    type: 'scene',
                    text: 'Спуститься на первый этаж',
                    sceneId: '9_build_1floor_2'
                },
                {
                    pitch: 0,
                    yaw: 0,
                    type: 'scene',
                    text: 'Подняться на третий этаж',
                    sceneId: '9_build_3floor_2'
                },
            ]
        },
        '9_build_1floor_2': {
            title: '9 корпус 1 этаж',
            type: 'equirectangular',
            panorama: 'img/9_build/1_floor/9_build_1floor_2.jpg',
            pitch: 0, 
            yaw: 90,
            hotSpots: [
                {
                    pitch: -2,
                    yaw: -170,
                    type: 'scene',
                    text: 'Вперёд',
                    sceneId: '9_build_1floor_1'
                },
                {
                    pitch: -2,
                    yaw: 0,
                    type: 'scene',
                    text: 'Подняться на второй этаж',
                    sceneId: '9_build_2floor_2'
                },
                
            ]
        },
    
    }
});

function changeScene(sceneId) {
    viewer.loadScene(sceneId);
    document.getElementById('scene-title').innerText = viewer.getConfig().scenes[sceneId].title || "Без названия";
}
