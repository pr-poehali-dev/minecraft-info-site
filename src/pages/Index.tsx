import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const mechanics = [
    {
      icon: 'Hammer',
      title: 'Крафт',
      description: 'Создавай инструменты, оружие и блоки из ресурсов',
      color: 'bg-minecraft-wood'
    },
    {
      icon: 'Zap',
      title: 'Редстоун',
      description: 'Электрические схемы и автоматизация механизмов',
      color: 'bg-minecraft-red'
    },
    {
      icon: 'Wheat',
      title: 'Фермерство',
      description: 'Выращивай растения и разводи животных',
      color: 'bg-minecraft-grass'
    },
    {
      icon: 'Sword',
      title: 'Боевая система',
      description: 'Сражайся с мобами и защищай свой дом',
      color: 'bg-minecraft-orange'
    }
  ];

  const crafts = [
    { name: 'Деревянная кирка', ingredients: '3 доски + 2 палки', category: 'Инструменты', emoji: '⛏️' },
    { name: 'Каменная кирка', ingredients: '3 булыжника + 2 палки', category: 'Инструменты', emoji: '⛏️' },
    { name: 'Железная кирка', ingredients: '3 железа + 2 палки', category: 'Инструменты', emoji: '⛏️' },
    { name: 'Золотая кирка', ingredients: '3 золота + 2 палки', category: 'Инструменты', emoji: '⛏️' },
    { name: 'Алмазная кирка', ingredients: '3 алмаза + 2 палки', category: 'Инструменты', emoji: '⛏️' },
    { name: 'Незеритовая кирка', ingredients: '1 алмазная кирка + 1 незеритовый слиток', category: 'Инструменты', emoji: '⛏️' },
    { name: 'Деревянный топор', ingredients: '3 доски + 2 палки', category: 'Инструменты', emoji: '🪓' },
    { name: 'Каменный топор', ingredients: '3 булыжника + 2 палки', category: 'Инструменты', emoji: '🪓' },
    { name: 'Железный топор', ingredients: '3 железа + 2 палки', category: 'Инструменты', emoji: '🪓' },
    { name: 'Алмазный топор', ingredients: '3 алмаза + 2 палки', category: 'Инструменты', emoji: '🪓' },
    { name: 'Деревянная лопата', ingredients: '1 доска + 2 палки', category: 'Инструменты', emoji: '🔨' },
    { name: 'Каменная лопата', ingredients: '1 булыжник + 2 палки', category: 'Инструменты', emoji: '🔨' },
    { name: 'Железная лопата', ingredients: '1 железо + 2 палки', category: 'Инструменты', emoji: '🔨' },
    { name: 'Алмазная лопата', ingredients: '1 алмаз + 2 палки', category: 'Инструменты', emoji: '🔨' },
    { name: 'Деревянная мотыга', ingredients: '2 доски + 2 палки', category: 'Инструменты', emoji: '🌾' },
    { name: 'Каменная мотыга', ingredients: '2 булыжника + 2 палки', category: 'Инструменты', emoji: '🌾' },
    { name: 'Железная мотыга', ingredients: '2 железа + 2 палки', category: 'Инструменты', emoji: '🌾' },
    { name: 'Алмазная мотыга', ingredients: '2 алмаза + 2 палки', category: 'Инструменты', emoji: '🌾' },
    { name: 'Ножницы', ingredients: '2 железных слитка', category: 'Инструменты', emoji: '✂️' },
    { name: 'Удочка', ingredients: '3 палки + 2 нити', category: 'Инструменты', emoji: '🎣' },
    { name: 'Ведро', ingredients: '3 железных слитка', category: 'Инструменты', emoji: '🪣' },
    { name: 'Компас', ingredients: '4 железа + 1 редстоун', category: 'Инструменты', emoji: '🧭' },
    { name: 'Часы', ingredients: '4 золота + 1 редстоун', category: 'Инструменты', emoji: '⏰' },
    { name: 'Подзорная труба', ingredients: '1 аметистовый осколок + 2 медных слитка', category: 'Инструменты', emoji: '🔭' },
    { name: 'Кисть', ingredients: '1 перо + 1 медь + 1 палка', category: 'Инструменты', emoji: '🖌️' },
    
    { name: 'Деревянный меч', ingredients: '2 доски + 1 палка', category: 'Оружие', emoji: '⚔️' },
    { name: 'Каменный меч', ingredients: '2 булыжника + 1 палка', category: 'Оружие', emoji: '⚔️' },
    { name: 'Железный меч', ingredients: '2 железа + 1 палка', category: 'Оружие', emoji: '⚔️' },
    { name: 'Золотой меч', ingredients: '2 золота + 1 палка', category: 'Оружие', emoji: '⚔️' },
    { name: 'Алмазный меч', ingredients: '2 алмаза + 1 палка', category: 'Оружие', emoji: '⚔️' },
    { name: 'Незеритовый меч', ingredients: '1 алмазный меч + 1 незеритовый слиток', category: 'Оружие', emoji: '⚔️' },
    { name: 'Лук', ingredients: '3 палки + 3 нити', category: 'Оружие', emoji: '🏹' },
    { name: 'Арбалет', ingredients: '3 палки + 2 нити + 1 железо + 1 крюк', category: 'Оружие', emoji: '🏹' },
    { name: 'Стрела', ingredients: '1 кремень + 1 палка + 1 перо', category: 'Оружие', emoji: '➡️' },
    { name: 'Щит', ingredients: '6 досок + 1 железный слиток', category: 'Оружие', emoji: '🛡️' },
    { name: 'Трезубец (только дроп)', ingredients: 'Дроп с утопленника', category: 'Оружие', emoji: '🔱' },
    
    { name: 'Кожаная куртка', ingredients: '8 кожи', category: 'Броня', emoji: '👔' },
    { name: 'Кожаные штаны', ingredients: '7 кожи', category: 'Броня', emoji: '👖' },
    { name: 'Кожаные ботинки', ingredients: '4 кожи', category: 'Броня', emoji: '👢' },
    { name: 'Кожаная шапка', ingredients: '5 кожи', category: 'Броня', emoji: '🎩' },
    { name: 'Железный шлем', ingredients: '5 железа', category: 'Броня', emoji: '⛑️' },
    { name: 'Железный нагрудник', ingredients: '8 железа', category: 'Броня', emoji: '👔' },
    { name: 'Железные поножи', ingredients: '7 железа', category: 'Броня', emoji: '👖' },
    { name: 'Железные ботинки', ingredients: '4 железа', category: 'Броня', emoji: '👢' },
    { name: 'Алмазный шлем', ingredients: '5 алмазов', category: 'Броня', emoji: '💎' },
    { name: 'Алмазный нагрудник', ingredients: '8 алмазов', category: 'Броня', emoji: '💎' },
    { name: 'Алмазные поножи', ingredients: '7 алмазов', category: 'Броня', emoji: '💎' },
    { name: 'Алмазные ботинки', ingredients: '4 алмаза', category: 'Броня', emoji: '💎' },
    { name: 'Незеритовая броня', ingredients: 'Алмазная броня + незеритовый слиток', category: 'Броня', emoji: '🛡️' },
    
    { name: 'Верстак', ingredients: '4 доски', category: 'Блоки', emoji: '🛠️' },
    { name: 'Печь', ingredients: '8 булыжников', category: 'Блоки', emoji: '🔥' },
    { name: 'Сундук', ingredients: '8 досок', category: 'Блоки', emoji: '📦' },
    { name: 'Большой сундук', ingredients: '2 сундука', category: 'Блоки', emoji: '📦' },
    { name: 'Бочка', ingredients: '6 досок + 2 плиты', category: 'Блоки', emoji: '🛢️' },
    { name: 'Кровать', ingredients: '3 шерсти + 3 доски', category: 'Блоки', emoji: '🛏️' },
    { name: 'Дверь', ingredients: '6 досок', category: 'Блоки', emoji: '🚪' },
    { name: 'Люк', ingredients: '6 досок', category: 'Блоки', emoji: '🪟' },
    { name: 'Забор', ingredients: '4 палки + 2 доски', category: 'Блоки', emoji: '🪚' },
    { name: 'Калитка', ingredients: '4 палки + 2 доски', category: 'Блоки', emoji: '🚧' },
    { name: 'Лестница', ingredients: '7 палок', category: 'Блоки', emoji: '🪜' },
    { name: 'Плита', ingredients: '3 блока одного типа', category: 'Блоки', emoji: '▫️' },
    { name: 'Ступени', ingredients: '6 блоков одного типа', category: 'Блоки', emoji: '📐' },
    { name: 'Стекло', ingredients: 'Песок (обжиг)', category: 'Блоки', emoji: '🪟' },
    { name: 'Стеклянная панель', ingredients: '6 стекла', category: 'Блоки', emoji: '🪟' },
    { name: 'Книжная полка', ingredients: '6 досок + 3 книги', category: 'Блоки', emoji: '📚' },
    { name: 'Табличка', ingredients: '6 досок + 1 палка', category: 'Блоки', emoji: '🪧' },
    { name: 'Картина', ingredients: '8 палок + 1 шерсть', category: 'Блоки', emoji: '🖼️' },
    { name: 'Рамка', ingredients: '8 палок + 1 кожа', category: 'Блоки', emoji: '🖼️' },
    { name: 'Светящаяся рамка', ingredients: '1 рамка + 1 светопыль', category: 'Блоки', emoji: '✨' },
    { name: 'Наковальня', ingredients: '3 железных блока + 4 железа', category: 'Блоки', emoji: '🔨' },
    { name: 'Зачарованный стол', ingredients: '4 обсидиана + 2 алмаза + 1 книга', category: 'Блоки', emoji: '📖' },
    { name: 'Маяк', ingredients: '3 обсидиана + 5 стекла + 1 звезда Нижнего мира', category: 'Блоки', emoji: '💡' },
    { name: 'Воронка', ingredients: '5 железа + 1 сундук', category: 'Блоки', emoji: '⬇️' },
    { name: 'Раздатчик', ingredients: '7 булыжника + 1 лук + 1 редстоун', category: 'Блоки', emoji: '📤' },
    { name: 'Выбрасыватель', ingredients: '7 булыжника + 1 редстоун', category: 'Блоки', emoji: '📤' },
    { name: 'Поршень', ingredients: '3 доски + 4 булыжника + 1 железо + 1 редстоун', category: 'Блоки', emoji: '🔧' },
    { name: 'Липкий поршень', ingredients: '1 поршень + 1 слизь', category: 'Блоки', emoji: '🔧' },
    { name: 'Наблюдатель', ingredients: '6 булыжника + 2 редстоуна + 1 кварц', category: 'Блоки', emoji: '👁️' },
    { name: 'Компаратор', ingredients: '3 факела + 3 камня + 1 кварц', category: 'Блоки', emoji: '🔀' },
    { name: 'Повторитель', ingredients: '3 камня + 2 факела + 1 редстоун', category: 'Блоки', emoji: '🔁' },
    { name: 'Ноты', ingredients: '8 досок + 1 редстоун', category: 'Блоки', emoji: '🎵' },
    { name: 'Проигрыватель', ingredients: '8 досок + 1 алмаз', category: 'Блоки', emoji: '📻' },
    { name: 'Точило', ingredients: '2 палки + 1 камень + 2 доски', category: 'Блоки', emoji: '⚙️' },
    { name: 'Ткацкий станок', ingredients: '2 доски + 2 нити', category: 'Блоки', emoji: '🧵' },
    { name: 'Коптильня', ingredients: '1 печь + 4 любых бревна', category: 'Блоки', emoji: '🔥' },
    { name: 'Плавильная печь', ingredients: '1 печь + 5 железа', category: 'Блоки', emoji: '🔥' },
    { name: 'Костёр', ingredients: '3 палки + 3 бревна + 1 уголь', category: 'Блоки', emoji: '🔥' },
    { name: 'Факел', ingredients: '1 уголь + 1 палка', category: 'Блоки', emoji: '🔦' },
    { name: 'Фонарь', ingredients: '8 железных самородков + 1 факел', category: 'Блоки', emoji: '🏮' },
    { name: 'Светокамень', ingredients: '4 светопыли', category: 'Блоки', emoji: '💡' },
    { name: 'Морской фонарь', ingredients: '4 призмариновых осколка + 5 призмариновых кристаллов', category: 'Блоки', emoji: '🔵' },
    { name: 'Цепь', ingredients: '1 железный слиток + 2 железных самородка', category: 'Блоки', emoji: '⛓️' },
    { name: 'Решётка', ingredients: '6 железных прутьев', category: 'Блоки', emoji: '⬜' },
    { name: 'Медный блок', ingredients: '9 медных слитков', category: 'Блоки', emoji: '🟧' },
    { name: 'Громоотвод', ingredients: '3 медных слитка', category: 'Блоки', emoji: '⚡' },
    
    { name: 'Факел душ', ingredients: '1 уголь + 1 палка + 1 земля душ', category: 'Незер', emoji: '👻' },
    { name: 'Фонарь душ', ingredients: '8 железных самородков + 1 факел душ', category: 'Незер', emoji: '👻' },
    { name: 'Костёр душ', ingredients: '3 палки + 3 бревна + 1 земля душ', category: 'Незер', emoji: '👻' },
    { name: 'Незеритовый блок', ingredients: '9 незеритовых слитков', category: 'Незер', emoji: '🟪' },
    { name: 'Незеритовый слиток', ingredients: '4 незеритовых обломка + 4 золотых слитка', category: 'Незер', emoji: '🟪' },
    { name: 'Респавн-якорь', ingredients: '6 плач обсидиана + 3 светокамня', category: 'Незер', emoji: '⚓' },
    
    { name: 'Рельсы', ingredients: '6 железных слитков + 1 палка', category: 'Транспорт', emoji: '🚂' },
    { name: 'Электрорельсы', ingredients: '6 золотых слитков + 1 палка + 1 редстоун', category: 'Транспорт', emoji: '⚡' },
    { name: 'Сенсорные рельсы', ingredients: '6 железа + 1 нажимная плита + 1 редстоун', category: 'Транспорт', emoji: '🚦' },
    { name: 'Активирующие рельсы', ingredients: '6 железа + 2 палки + 1 редстоун факел', category: 'Транспорт', emoji: '🚦' },
    { name: 'Вагонетка', ingredients: '5 железных слитков', category: 'Транспорт', emoji: '🛒' },
    { name: 'Вагонетка с сундуком', ingredients: '1 вагонетка + 1 сундук', category: 'Транспорт', emoji: '📦' },
    { name: 'Вагонетка с печью', ingredients: '1 вагонетка + 1 печь', category: 'Транспорт', emoji: '🔥' },
    { name: 'Вагонетка с воронкой', ingredients: '1 вагонетка + 1 воронка', category: 'Транспорт', emoji: '⬇️' },
    { name: 'Лодка', ingredients: '5 досок', category: 'Транспорт', emoji: '⛵' },
    { name: 'Лодка с сундуком', ingredients: '1 лодка + 1 сундук', category: 'Транспорт', emoji: '⛵' },
    
    { name: 'Редстоун факел', ingredients: '1 редстоун + 1 палка', category: 'Редстоун', emoji: '🔴' },
    { name: 'Редстоун лампа', ingredients: '4 редстоуна + 1 светокамень', category: 'Редстоун', emoji: '💡' },
    { name: 'Кнопка', ingredients: '1 камень или дерево', category: 'Редстоун', emoji: '🔘' },
    { name: 'Рычаг', ingredients: '1 палка + 1 булыжник', category: 'Редстоун', emoji: '🎚️' },
    { name: 'Нажимная плита', ingredients: '2 блока одного типа', category: 'Редстоун', emoji: '⬜' },
    { name: 'Взвешивающая плита', ingredients: '2 железа или золота', category: 'Редстоун', emoji: '⚖️' },
    { name: 'Датчик дневного света', ingredients: '3 стекла + 3 кварца + 3 плиты', category: 'Редстоун', emoji: '☀️' },
    { name: 'Крюк', ingredients: '1 железо + 1 палка + 1 доска', category: 'Редстоун', emoji: '🪝' },
    { name: 'Натяжной датчик', ingredients: '2 доски + 1 крюк + 2 нити', category: 'Редстоун', emoji: '🕸️' },
    { name: 'ТНТ', ingredients: '5 пороха + 4 песка', category: 'Редстоун', emoji: '💣' },
    { name: 'Калиброванный скульк-сенсор', ingredients: '1 скульк-сенсор + 3 аметистовых осколка', category: 'Редстоун', emoji: '🔵' },
    
    { name: 'Книга', ingredients: '3 бумаги + 1 кожа', category: 'Разное', emoji: '📕' },
    { name: 'Книга с пером', ingredients: '1 книга + 1 перо + 1 чернильный мешок', category: 'Разное', emoji: '📝' },
    { name: 'Бумага', ingredients: '3 сахарных тростника', category: 'Разное', emoji: '📄' },
    { name: 'Карта', ingredients: '8 бумаги + 1 компас', category: 'Разное', emoji: '🗺️' },
    { name: 'Флаг', ingredients: '6 шерсти + 1 палка', category: 'Разное', emoji: '🚩' },
    { name: 'Фейерверк', ingredients: '1 бумага + 1 порох + красители', category: 'Разное', emoji: '🎆' },
    { name: 'Хлеб', ingredients: '3 пшеницы', category: 'Еда', emoji: '🍞' },
    { name: 'Торт', ingredients: '3 молока + 2 сахара + 1 яйцо + 3 пшеницы', category: 'Еда', emoji: '🎂' },
    { name: 'Печенье', ingredients: '2 пшеницы + 1 какао-боб', category: 'Еда', emoji: '🍪' },
    { name: 'Тыквенный пирог', ingredients: '1 тыква + 1 яйцо + 1 сахар', category: 'Еда', emoji: '🥧' },
    { name: 'Грибной суп', ingredients: '1 красный гриб + 1 коричневый гриб + 1 миска', category: 'Еда', emoji: '🍲' },
    { name: 'Тушёный кролик', ingredients: '1 жареный кролик + 1 морковь + 1 печёный картофель + 1 гриб + 1 миска', category: 'Еда', emoji: '🍲' },
    { name: 'Подозрительное рагу', ingredients: '1 красный гриб + 1 коричневый гриб + 1 миска + 1 цветок', category: 'Еда', emoji: '🍲' },
    { name: 'Золотое яблоко', ingredients: '1 яблоко + 8 золотых слитков', category: 'Еда', emoji: '🍎' },
    { name: 'Сахар', ingredients: '1 сахарный тростник', category: 'Еда', emoji: '🍬' },
    { name: 'Блок сена', ingredients: '9 пшеницы', category: 'Еда', emoji: '🌾' },
    { name: 'Миска', ingredients: '3 доски', category: 'Еда', emoji: '🥣' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-minecraft-water/20 via-minecraft-grass/10 to-minecraft-stone/20">
      <nav className="bg-minecraft-dark/95 backdrop-blur-sm border-b border-minecraft-grass/30 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-minecraft-grass rounded-lg flex items-center justify-center text-2xl">
              🟩
            </div>
            <h1 className="text-2xl font-bold text-white">Minecraft Wiki</h1>
          </div>
          <div className="flex gap-2">
            <Button
              variant={activeSection === 'home' ? 'default' : 'ghost'}
              onClick={() => setActiveSection('home')}
              className="text-white hover:bg-minecraft-grass/20"
            >
              <Icon name="Home" className="mr-2 h-4 w-4" />
              Главная
            </Button>
            <Button
              variant={activeSection === 'mechanics' ? 'default' : 'ghost'}
              onClick={() => setActiveSection('mechanics')}
              className="text-white hover:bg-minecraft-grass/20"
            >
              <Icon name="Cog" className="mr-2 h-4 w-4" />
              Механики
            </Button>
            <Button
              variant={activeSection === 'crafts' ? 'default' : 'ghost'}
              onClick={() => setActiveSection('crafts')}
              className="text-white hover:bg-minecraft-grass/20"
            >
              <Icon name="Hammer" className="mr-2 h-4 w-4" />
              Крафты
            </Button>
          </div>
        </div>
      </nav>

      {activeSection === 'home' && (
        <section className="container mx-auto px-4 py-20">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-6xl font-bold mb-6 bg-gradient-to-r from-minecraft-grass via-minecraft-water to-minecraft-orange bg-clip-text text-transparent">
              Добро пожаловать в мир Minecraft
            </h2>
            <p className="text-xl text-minecraft-stone max-w-2xl mx-auto">
              Исследуй бесконечные миры, создавай удивительные постройки и выживай в приключениях
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {mechanics.map((mechanic, index) => (
              <Card 
                key={index}
                className="hover:scale-105 transition-all duration-300 border-2 hover:border-minecraft-grass cursor-pointer animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
                onClick={() => setActiveSection('mechanics')}
              >
                <CardHeader>
                  <div className={`w-16 h-16 ${mechanic.color} rounded-xl flex items-center justify-center mb-4 mx-auto`}>
                    <Icon name={mechanic.icon as any} className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-center">{mechanic.title}</CardTitle>
                  <CardDescription className="text-center">{mechanic.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </section>
      )}

      {activeSection === 'mechanics' && (
        <section className="container mx-auto px-4 py-12 animate-fade-in">
          <h2 className="text-4xl font-bold mb-8 text-minecraft-dark">Основные механики игры</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {mechanics.map((mechanic, index) => (
              <Card key={index} className="border-2 hover:border-minecraft-grass transition-all">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 ${mechanic.color} rounded-lg flex items-center justify-center`}>
                      <Icon name={mechanic.icon as any} className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-2xl">{mechanic.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-lg mb-4">{mechanic.description}</p>
                  
                  {mechanic.title === 'Крафт' && (
                    <div className="space-y-2 text-sm">
                      <p>• Используй верстак для создания предметов</p>
                      <p>• Размещай ресурсы в правильном порядке</p>
                      <p>• Открывай новые рецепты по мере развития</p>
                    </div>
                  )}
                  
                  {mechanic.title === 'Редстоун' && (
                    <div className="space-y-2 text-sm">
                      <p>• Создавай электрические цепи</p>
                      <p>• Автоматизируй фермы и механизмы</p>
                      <p>• Комбинируй компоненты для сложных систем</p>
                    </div>
                  )}
                  
                  {mechanic.title === 'Фермерство' && (
                    <div className="space-y-2 text-sm">
                      <p>• Выращивай пшеницу, морковь и картофель</p>
                      <p>• Разводи животных для получения ресурсов</p>
                      <p>• Используй костную муку для ускорения роста</p>
                    </div>
                  )}
                  
                  {mechanic.title === 'Боевая система' && (
                    <div className="space-y-2 text-sm">
                      <p>• Крафть оружие и броню</p>
                      <p>• Изучай паттерны атак мобов</p>
                      <p>• Используй зачарования для усиления снаряжения</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      )}

      {activeSection === 'crafts' && (
        <section className="container mx-auto px-4 py-12 animate-fade-in">
          <h2 className="text-4xl font-bold mb-8 text-minecraft-dark">Рецепты крафтов (до v1.21)</h2>
          
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full grid-cols-5 mb-8">
              <TabsTrigger value="all">Все</TabsTrigger>
              <TabsTrigger value="tools">Инструменты</TabsTrigger>
              <TabsTrigger value="weapon">Оружие</TabsTrigger>
              <TabsTrigger value="blocks">Блоки</TabsTrigger>
              <TabsTrigger value="other">Прочее</TabsTrigger>
            </TabsList>
            
            <TabsContent value="all" className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
              {crafts.map((craft, index) => (
                <Card 
                  key={index}
                  className="hover:scale-105 transition-all border-2 hover:border-minecraft-grass cursor-pointer"
                >
                  <CardHeader className="pb-3">
                    <div className="text-4xl mb-2 text-center">{craft.emoji}</div>
                    <CardTitle className="text-lg text-center">{craft.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-2">{craft.ingredients}</p>
                    <span className="inline-block px-3 py-1 bg-minecraft-grass/20 text-minecraft-dark text-xs rounded-full">
                      {craft.category}
                    </span>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>
            
            <TabsContent value="tools" className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
              {crafts.filter(c => c.category === 'Инструменты').map((craft, index) => (
                <Card 
                  key={index}
                  className="hover:scale-105 transition-all border-2 hover:border-minecraft-grass"
                >
                  <CardHeader className="pb-3">
                    <div className="text-4xl mb-2 text-center">{craft.emoji}</div>
                    <CardTitle className="text-lg text-center">{craft.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{craft.ingredients}</p>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>
            
            <TabsContent value="weapon" className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
              {crafts.filter(c => c.category === 'Оружие' || c.category === 'Защита').map((craft, index) => (
                <Card 
                  key={index}
                  className="hover:scale-105 transition-all border-2 hover:border-minecraft-grass"
                >
                  <CardHeader className="pb-3">
                    <div className="text-4xl mb-2 text-center">{craft.emoji}</div>
                    <CardTitle className="text-lg text-center">{craft.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{craft.ingredients}</p>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>
            
            <TabsContent value="blocks" className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
              {crafts.filter(c => c.category === 'Блоки' || c.category === 'Хранение').map((craft, index) => (
                <Card 
                  key={index}
                  className="hover:scale-105 transition-all border-2 hover:border-minecraft-grass"
                >
                  <CardHeader className="pb-3">
                    <div className="text-4xl mb-2 text-center">{craft.emoji}</div>
                    <CardTitle className="text-lg text-center">{craft.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{craft.ingredients}</p>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>
            
            <TabsContent value="other" className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
              {crafts.filter(c => !['Инструменты', 'Оружие', 'Защита', 'Блоки', 'Хранение'].includes(c.category)).map((craft, index) => (
                <Card 
                  key={index}
                  className="hover:scale-105 transition-all border-2 hover:border-minecraft-grass"
                >
                  <CardHeader className="pb-3">
                    <div className="text-4xl mb-2 text-center">{craft.emoji}</div>
                    <CardTitle className="text-lg text-center">{craft.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-2">{craft.ingredients}</p>
                    <span className="inline-block px-3 py-1 bg-minecraft-grass/20 text-minecraft-dark text-xs rounded-full">
                      {craft.category}
                    </span>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>
          </Tabs>
        </section>
      )}

      <footer className="bg-minecraft-dark text-white py-8 mt-20">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm opacity-75">Minecraft Wiki • Информация о версиях до 1.21</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;