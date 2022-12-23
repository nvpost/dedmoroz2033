export let levels = {

    level1:{
        devises_id: [6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
        devise_range: 10,
        rule_id: [1, 9],
        onOffRules: 'blink',
        status: false,
        title: 'Зажечь гирлянду на улице',
        text: '<p><b>Нужно подготовить дом к Новому году и выполнить все задания из списка. Для начала помоги зажечь уличную гирлянду. Для этого выбери оборудование из списка приборов слева и перетащи в схему справа.</b><br><i>Задача: Настроить управление максимальным количеством ламп.</i></p>',
        win_text: 'Наконец-то, теперь у меня новогоднее настроение. Выбирай следующую задачу из списка!',
        wrong_texts: [
            'Ой, что-то ты намудрил, попробуй еще раз!',
            'Без гирлянды никакого новогоднего настроения…',
            'Я в тебя верю! Зажги ее.',
            
        ],
        onOffPosition: {left: '0px', top: '0px'}
    },

    level2:{
        // devises_id: [6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
        devise_range: 10,
        rule_id: [4, 3, 6],
        onOffRules: 'reverce',
        status: false,
        title: 'Испечь печенье к рождественскому завтраку',
        text: '<p><b>Это мой фирменный рецепт, но для тебя ничего не жалко.</b><br><i>Задача: Выпекать печенье при температуре от 120 до 150 градусов, для получения корочки несколько минут выдерживать при температуре 150 градусов. Мощность однофазного ТЭНа 3 кВт.</i></p>',
        win_text: 'Дед тобой доволен! Ты правильно использовал приборы ОВЕН для решения этой задачи!',
        wrong_texts: [
            'Это, определенно, не то.',
            'Печенье сгорело! Видимо, утром будем доедать оливье. ',
            'Попробуй еще раз!', 
        ],
        onOffPosition: {left: '0px', top: '0px'}
    },
    level3:{
        devise_range: 8,
        rule_id: [2, 5],
        onOffRules: 'reverce',
        status: false,
        title: 'Сварить крафтовый лимонад',
        text: '<p><b>Наварю лимонада, чтобы всем хватило…</b><br></i>Задача: Отслеживать, чтобы лимонад не заканчивался и не выливался!</i></p>',
        win_text: 'Лимонад под контролем!<br>Потому что ты верно подобрал устройства ОВЕН для контроля и управления уровнем.',
        wrong_texts: [
            'Ой-ой! Лимонад вытекает!',
            'Скорее, подставляйте таз, убегает!', 
            'Эх, убежало, надо позвать оленя, пусть хоть он попьет.', 
            
        ],
        onOffPosition: {left: '0px', top: '0px'}
    },
    level4:{
        devise_range: 12,
        rule_id: [7, 10, 6],
        alt_rule_id: [10, 7, 6],
        onOffRules: 'noReaction',
        status: false,
        title: 'Рассортировать подарки',
        text: '<p><b>3 шт. – в жестяном ящике, 1 шт. – в деревянном ящике, 2 шт. – в жестяном…  3 шт. – в деревянном... Эх, я опять сбился, надо считать заново…</b><br><i>Задача: Автоматизировать подсчет подарков с двух конвейеров: на одном – деревянные ящики, на другом – жестяные.</i></p>',
        win_text: 'Сработало! Правильно, для подсчёта нужно использовать бесконтактные датчики и счетчики ОВЕН.',
        wrong_texts: [
            'Может, я лучше посчитаю в уме?',
            'Это что за разносорт?',
            'Ну помоги деду, прошу!',
              
        ],
        onOffPosition: {left: '0px', top: '0px'}
    },
    level5:{
        devise_range: 8,
        rule_id: [3, 4],
        onOffRules: 'regular',
        status: false,
        title: 'Подобрать автоматику в котельную',
        text: '<p><b>Холодает…</b><br><i>Задача: Подобрать автоматику. В каждой котельной 4 котла с модулируемыми горелками каждый. У каждого котла имеется котловой насос. Эти котлы должны работать в каскаде.</i></p>',
        win_text: 'Класс! Ты верно использовал контроллеры ОВЕН для управления котельной! Надеюсь, что к вечеру 31 декабря будет тепло.',
        wrong_texts: [
            'Это, определенно, не то.',
            'Холодно, пойду вместе с оленем греться. Или все-таки настроишь?',
            'А тепло сегодня будет?', 
        ],
        onOffPosition: {left: '0px', top: '0px'}
    },
    level6:{
        devise_range: 8,
        rule_id: [4],
        onOffRules: 'regular',
        status: false,
        title: 'Управлять отоплением и ГВС',
        text: '<p><b>Все еще недостаточно тепло…</b><br><i>Задача: Управлять отоплением, клапаном и насосом подпитки, и обязательно, чтобы реле не щелкало, а то олень пугается.</i></p>',
        win_text: 'Теплота! И олень не нервничает. Здорово, что для управления отоплением и ГВС у компании ОВЕН есть ТРМ1032.',
        wrong_texts: [
            'Это, определенно, не то.',
            'Ты забыл о приборах ОВЕН?',
            'Попробуй еще раз!',
             
        ],
        onOffPosition: {left: '0px', top: '0px'}
    },
    level7:{
        devise_range: 6,
        rule_id: [2],
        onOffRules: 'gif',
        status: false,
        title: 'Управлять приточной вентиляцией',
        text: '<p><b>Ох, теперь жарко! Нужно добавить свежего воздуха!</b><br><i>Задача: Управлять приточной вентиляцией. Нагреватель водяной, на приточном воздухе стоит датчик ДТС405Л-50М.В3.200. Глубина щита ограничена.</i></p>',
        win_text: 'Мм… свежий воздух! Всего один прибор ОВЕН, а какой эффект!',
        wrong_texts: [
            'Ты уверен, что это тот прибор?',
            'А если еще подумать...',
            'Давай-ка еще раз.',

        ],
        onOffPosition: {left: '0px', top: '0px'}
    },

    level8:{
        devise_range: 10,
        rule_id: [4, 2, 6],
        alt_rule_id: [2, 4, 6],
        onOffRules: 'regular',
        status: false,
        title: 'Организовать микроклимат в питомнике оленей',
        text: '<p><b>Надо позаботиться о моем любимце.</b><br><i>Задача: Контролировать уровень углекислого газа, влажность, температуру, по времени наполнять поилки оленей, управлять освещением, архивировать показания всех датчиков по USB-flash.</i></p>',
        win_text: 'Олень доволен! Ты справился, верно составил комбинацию датчиков газа и влажности ОВЕН, и выбрал контроллер ПЛК110.',
        wrong_texts: [
            'Бедненький, сейчас же упадет от жары.',
            'Пожалейте оленя, ему еще подарки развозить.',
            'А попить оленю сегодня дадут?',
        ],
        onOffPosition: {left: '0px', top: '0px'}
    },

    level9:{
        devise_range: 12,

        rule_id: [2, 3, 10],
        alt_rule_id: [10, 3, 2],
        onOffRules: 'newDed',
        status: false,
        title: 'Настроить удаленный мониторинг выдува стекла для бутылок лимонада',
        text: '<p><b>Нужно уехать по делам, буду следить за процессом удаленно.</b><br><i>Задача: Контролировать температуру стекла и пресс-формы. Температура может достигать 950 градусов. Настроить отображение графика на планшете Андроид и получать уведомления через телеграм-бот. В рабочем цехе есть вай-фай. Отверстие под датчик 4,8 мм.</i></p>',
        win_text: 'Как удобно с OwenCloud, всё под контролем и, главное, из любого места!',
        wrong_texts: [
            'Ой, бутылки взрываются, а лимонад во что разливать?',
            'Я же не могу тут весь день сидеть, настрой удаленный мониторинг.',
            'Мы болтаем или едем?',
            
        ],
        onOffPosition: {left: '0px', top: '0px'}
    }
}

 