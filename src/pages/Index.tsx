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
    {
      name: 'Деревянная кирка',
      ingredients: '3 доски + 2 палки',
      category: 'Инструменты',
      emoji: '⛏️'
    },
    {
      name: 'Меч',
      ingredients: '2 материала + 1 палка',
      category: 'Оружие',
      emoji: '⚔️'
    },
    {
      name: 'Печь',
      ingredients: '8 булыжников',
      category: 'Блоки',
      emoji: '🔥'
    },
    {
      name: 'Верстак',
      ingredients: '4 доски',
      category: 'Инструменты',
      emoji: '🛠️'
    },
    {
      name: 'Факел',
      ingredients: '1 уголь + 1 палка',
      category: 'Освещение',
      emoji: '🔦'
    },
    {
      name: 'Сундук',
      ingredients: '8 досок',
      category: 'Хранение',
      emoji: '📦'
    },
    {
      name: 'Кровать',
      ingredients: '3 шерсти + 3 доски',
      category: 'Блоки',
      emoji: '🛏️'
    },
    {
      name: 'Лук',
      ingredients: '3 палки + 3 нити',
      category: 'Оружие',
      emoji: '🏹'
    },
    {
      name: 'Броня',
      ingredients: '24 материала (комплект)',
      category: 'Защита',
      emoji: '🛡️'
    },
    {
      name: 'Зачарованный стол',
      ingredients: '4 обсидиана + 2 алмаза + 1 книга',
      category: 'Магия',
      emoji: '📖'
    },
    {
      name: 'Рельсы',
      ingredients: '6 железных слитков + 1 палка',
      category: 'Транспорт',
      emoji: '🚂'
    },
    {
      name: 'Поршень',
      ingredients: '3 доски + 4 булыжника + 1 железо + 1 редстоун',
      category: 'Редстоун',
      emoji: '🔧'
    }
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
