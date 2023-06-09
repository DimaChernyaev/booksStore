const books = [
    {
        img: 'https://i.lb.ua/051/08/5f64d0fd49af4.jpeg',
        name: 'Книга Я бачу, вас цікавить пітьма',
        author: 'Ілларіон Павлюк',
        description: 'Київського кримінального психолога Андрія Гайстера відправляють консультантом у богом забуте селище Буськів Сад. Зимової ночі там зникла маленька дівчинка. А ще там водиться Звір — серійний маніяк, убивств якого тамтешні мешканці воліють не помічати... У цьому проклятому селищі, де все по колу і всі живуть життям, яке ненавидять, розслідування постійно заходить у глухий кут. Андрій вірить, що загублена дівчинка, попри все, жива і він її знайде. Але нікому, крім нього, це не потрібно',
        price: 500,
        id: 1,
    },

    {
        img: 'https://content1.rozetka.com.ua/goods/images/original/191459911.jpg',
        name: '1984',
        author: 'Джордж Орвелл ',
        description: 'Бажаєте розібратися у реаліях сьогодення? Тоді радимо придбати книгу «1984». Дивно, але реалії твору, написаного у жанрі антиутопії більше 60 років тому, у деталях збігаються з тими, що ми спостерігаємо у наші дні.',
        price: 180,
        id: 2,
    },

    {
        img: 'https://cdn.vogue.ua/i/image_720x1080/uploads/article/fd9/809/4b3/mockup_3_1_5fcf4b3809fd9.png',
        name: 'Вибір. Прийняти можливе',
        author: 'Едіт Єва Еґер ',
        description: 'Докротка Еґер потрапила до Аушвіцу, коли їй було 16 років, там вона втратила батьків, а їй із сестрою вдалося вижити. Через кілька років після звільнення вона емігрувала до Америки, де протягом десятиліть працювала над тим, щоб зцілитись від травми. У цій книжці історія її перебування у концтаборі та її звільнення, історія самозцілення та яку роль у цьому процесі відіграв Віктор Франкл, психотерапевт і теж вцілілий у Аушвіці, а також це історії її пацієнтів, яким вона допомогла пережити скрутні моменти.',
        price: 320,
        id: 3,
    },

    {
        img: 'https://cdn.27.ua/799/bc/a4/48292_1.jpeg',
        name: 'Атлант розправив плечі. Частина 1. Несуперечність',
        author: 'Айн Ренд',
        description: 'Події, описані на сторінках «Атлант розправив плечі» 1, 2, 3 частини відбуваються у США у невизначений час. Окремі підприємці ставлять під сумнів ідею «справедливого розподілу» і «загального блага», якими прикривається уряд для отримання користі. У середовищі незадоволених назріває бунт, очолити який припадає Джону Голту. Символом повстання стає титан Атлант.',
        price: 300,
        id: 4,
    },

    {
        img: 'https://www.ideo-grafika.com/wp-content/uploads/2017/11/1stt.jpg',
        name: 'Першому гравцеві приготуватися',
        author: 'Ернест Клайн',
        description: '2044 рік, світ потерпає від енергетичної кризи, панують безробіття і голод. Як і більшість людства, Вейд Воттс рятується від похмурої реальності в ОАЗі — масштабній віртуальній утопії, де можливості обмежуються лише фантазією. І як більшість людства, він мріє здобути найцінніший приз, захований у віртуальному світі. Творець ОАЗи Джеймс Галлідей заповів свій багатомільярдний спадок і саму ОАЗу тому, хто першим знайде три ключі. Полювання починається.',
        price: 150,
        id: 5,
    },

    {
        img: 'https://book-ye.com.ua/upload/iblock/31a/7dcde956_819f_11e6_80c0_000c29ae1566_79f4b5a5_dce5_11ec_8170_0050568ef5e6.jpg',
        name: 'Володар мух',
        author: 'Ернест Клайн',
        description: 'Внаслідок авіакатастрофи кілька дітей потрапляють на безлюдний острів, дуже схожий на райський куточок. Безмежний океан, тропічні пальми, кришталеве джерело, таємнича печера... Тут є все, крім дорослих. У маленькій громаді відразу визначаються два лідери. Починається боротьба за владу. І надто скоро діти забувають не тільки про дружбу й порядність, а навіть про людську подобу... Межа, яка відділяє людину від тварини, дуже тонка. І боятися треба не того звіра, що десь зовні. Набагато страшніший той, що всередині в кожного...',
        price: 200,
        id: 6,
    },

    {
        img: 'https://content.rozetka.com.ua/goods/images/original/181017679.jpg',
        name: 'Атлант розправив плечі. Частина 2. Або-або',
        author: 'Айн Ренд ',
        description: 'Політика державної влади призводить країну до економічного руйнування: суспільство занурюється в хаос, позбавлене провідників і цілей скочується у нове дикунство. У свідомість мас наполегливо проштовхується уявлення про те, що мислення - це ілюзія, той, хто шукає будь-який сенс - просто втрачає час. Апофеозом цього процесу стає введення заборони на розум. Тим часом день за днем в країні зникають підприємці, вони відмовляються від здобутих досягнень і власними руками нищать справи свого життя, даючи зрозуміти, що встали у непримиренну опозицію до нової влади. Даґні починає підозрювати, що ці процес и не є збігом обставин, в країні зявився невідомий Руйнівник, який свідомо усуває з економічного поля найвпливовіших гравців, прискорюючи тим самим загальну безпорадність і суспільну деградацію. Жінка не залишає надії запустити у виробництво досконалий двигун, йдучи на зустріч зі зневіреним інженером, що відмовився працювати на благо невігласів. В дорозі вона знайомиться з випадковим волоцюгою. Виявляється, той колись працював в самому горнилі «чистого зла», що сьогодні пожирає всю країну...',
        price: 300,
        id: 7,
    },

    {
        img: 'https://bookopt.com.ua/media/catalog/product/cache/1/image/600x/28e8df29f40af14377946c6316758c80/a/t/atlant-rozpraviv-plechi-ch3-a-e-a_01_1.jpg',
        name: 'Атлант розправив плечі. Частина 3. А є А',
        author: 'Айн Ренд ',
        description: 'Деструктивні тенденції у світі та суспільстві прискорюються у міру того, як великі промисловці і талановиті підприємці зникають з публічного життя. Даґні Таґґарт продовжує свої пошуки і, здається, впритул наближається до розкриття таємниці. Дедалі частіше вона чує ім’я загадкового Джона Ґолта, але чи він янгол-месник, а чи то створіння пекла, не в змозі сказати ніхто. Цілком зрозуміло, що ці двоє обовязково перетнуться. Загадкова ущелина Ґолта розкриває перед героїнею свій секрет: у її нетрях розкинувся цілий утопічний світ, де збіглі атланти намагаються будувати альтернативне суспільство на проголошених ними засадах особистісної реалізації. А ззовні світ продовжує занурюватися у хаос анархії та мародерства, державне регулювання всіх критично важливих галузей економіки сягає свого апогею ,що остаточно відштовхує від правлячої верхівки останніх лояльних представників бізнесової еліти.',
        price: 300,
        id: 8,
    },
];

export { books };