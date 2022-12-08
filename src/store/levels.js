export let levels = {

    level1:{
        devises_id: [6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
        devise_range: 10,
        rule_id: [1, 9],
        onOffRules: 'blink',
        status: false,
        title: 'Настроить управление максимальным количеством ламп',
        text: 'Нужно подготовить дом к Новому году и выполнить все задания из списка. Для начала, давай зажжем уличную гирлянду. Для этого выбери оборудование из списка приборов слева и перетащи в схему справа.',
        win_text: 'Поздравляю! Выбирай следующую задачу из списка.',
        wrong_text: 'Ой, что-то ты намудрил, попробуй еще раз.',
        onOffPosition: {left: '0px', top: '0px'}
    },

    level2:{
        // devises_id: [6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
        devise_range: 10,
        rule_id: [4, 3, 6],
        onOffRules: 'reverce',
        status: false,
        title: 'Испечь булочки к новогоднему столу',
        text: '<b>Давай испечем булочки по моему фирменному рецепту!</b><p>Выпекать булочки при температуре от 120 до 150 градусов, для получения корочки несколько минут выдерживать при температуре 150 градусов. Мощность однофазного ТЭНа на 3 кВт.</p>',
        win_text: 'Похоже, ты хороший повар! И правильно использовал приборы ОВЕН для решения этой задачи!',
        wrong_text: 'Это, определенно, не то…',
        onOffPosition: {left: '0px', top: '0px'}
    },
    level3:{
        devise_range: 8,
        rule_id: [2, 5],
        onOffRules: 'reverce',
        status: false,
        title: 'Сварить крафтовый лимонад',
        text: '<b>Наварю лимонада, чтобы всем хватило…</b><p>Чтобы лимонад не вытекал, очень важно, контролировать уровень и управлять им!</p>',
        win_text: 'Лимонад под контролем!<br>Ты верно подобрал устройства ОВЕН для контроля и управления уровнем!',
        wrong_text: 'Ой-ой! Лимонад вытекает!',
        onOffPosition: {left: '0px', top: '0px'}
    },
    level4:{
        devise_range: 12,
        rule_id: [7, 6],
        alt_rule_id: [10, 6],
        onOffRules: 'noReaction',
        status: false,
        title: 'Пересчитать подарки',
        text: '<p>3 шт в жестяном ящике, 1 шт в деревянном ящике, 2 шт в жесте, 3 шт в дереве….надо считать заново</p><p>Эх, нужно автоматизировать подсчет подарков с двух конвейеров: на одном – деревянные ящики, на другом – жестяные</p>',
        win_text: 'О! Теперь ты всё сосчитаешь все подарки! Для подсчёта продукции используй бесконтактные датчики и счетчики ОВЕН!',
        wrong_text: 'Может, я лучше посчитаю в уме?',
        onOffPosition: {left: '0px', top: '0px'}
    },
    level5:{
        devise_range: 8,
        rule_id: [3, 4],
        onOffRules: 'regular',
        status: false,
        title: 'Подобрать автоматику в котельную',
        text: '<p>Холодает…<br>Задача: Подобрать автоматику, исходя из данных: в каждой котельной 4 котла с модулируемыми горелками каждый. У каждого котла имеется котловой насос. Эти котлы должны работать в каскаде.</p>',
        win_text: 'Теперь хоть тепло будет к вечеру 31 декабря',
        wrong_text: 'Это, определенно, не то…',
        onOffPosition: {left: '0px', top: '0px'}
    },
    level6:{
        devise_range: 8,
        rule_id: [4],
        onOffRules: 'regular',
        status: false,
        title: 'Управлять отоплением и ГВС',
        text: '<p>Все еще недостаточно тепло<br>Задача: Управлять отоплением, клапаном и насосом подпитки, и обязательно, чтобы реле не щелкало, а то олень пугается.</p>',
        win_text: 'Тепло, и олень не нервничает',
        wrong_text: 'Это, определенно, не то…',
        onOffPosition: {left: '0px', top: '0px'}
    },
    level7:{
        devise_range: 6,
        rule_id: [2],
        onOffRules: 'gif',
        status: false,
        title: 'Управлять приточной вентиляцией',
        text: '<p>Все еще недостаточно тепло<br>Задача: Управлять приточной вентиляцией. Условия: нагреватель водяной, на приточном воздухе стоит датчик ДТС405Л-50М.В3.200. Глубина щита ограничена.</p>',
        win_text: 'Мм…свежий воздух!',
        wrong_text: 'Это, определенно, не то…',
        onOffPosition: {left: '0px', top: '0px'}
    },

    level8:{
        devise_range: 10,
        rule_id: [4, 2, 6],
        alt_rule_id: [2, 4, 6],
        onOffRules: 'regular',
        status: false,
        title: 'Организовать микроклимат в питомнике оленей',
        text: '<b>Надо позаботиться о моем любимце</b><p>Контролировать уровень углекислого газа, влажность, температуру, по времени наполнять поилки оленей, управлять освещением, архивировать показания всех датчиков по USB-flash.</p>',
        win_text: 'Мм…свежий воздух!',
        wrong_text: 'Бедненький, сейчас же упадет от жары',
        onOffPosition: {left: '0px', top: '0px'}
    }
}

 