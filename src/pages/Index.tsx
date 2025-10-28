import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const tariffs = [
    {
      name: 'Минутный',
      price: '5 ₽',
      unit: 'минута',
      features: ['Без абонентской платы', 'Оплата по факту', 'Идеально для коротких поездок'],
      icon: 'Clock',
      color: 'bg-green-50 border-green-200'
    },
    {
      name: 'Часовой',
      price: '199 ₽',
      unit: 'час',
      features: ['Экономия до 30%', 'Фиксированная цена', 'Для средних поездок'],
      icon: 'Timer',
      color: 'bg-lime-50 border-lime-200',
      popular: true
    },
    {
      name: 'Дневной',
      price: '799 ₽',
      unit: 'день',
      features: ['Безлимитные поездки', 'Максимальная экономия', 'Для активных пользователей'],
      icon: 'Sun',
      color: 'bg-amber-50 border-amber-200'
    }
  ];

  const rentalPoints = [
    { name: 'Парк Горького', address: 'Крымский Вал, 9', scooters: 15 },
    { name: 'Метро Арбатская', address: 'Арбатская площадь', scooters: 8 },
    { name: 'ВДНХ', address: 'проспект Мира, 119', scooters: 22 },
    { name: 'Патриаршие пруды', address: 'Малая Бронная улица', scooters: 12 },
    { name: 'Красная площадь', address: 'Красная площадь', scooters: 18 }
  ];

  const rules = [
    {
      question: 'Как начать пользоваться самокатом?',
      answer: 'Скачайте приложение, зарегистрируйтесь, найдите ближайший самокат на карте и отсканируйте QR-код для разблокировки.'
    },
    {
      question: 'Какие правила безопасности нужно соблюдать?',
      answer: 'Всегда надевайте шлем (входит в комплект), соблюдайте ПДД, не превышайте скорость 25 км/ч, используйте велодорожки где это возможно.'
    },
    {
      question: 'Где можно парковать самокат?',
      answer: 'Паркуйте самокат только в специально отведенных зонах, не блокируйте проходы и входы в здания. В приложении показаны разрешенные зоны парковки.'
    },
    {
      question: 'Что делать в случае поломки?',
      answer: 'Сразу остановитесь, сообщите о проблеме через приложение. Мы заменим самокат или вернем деньги за поездку.'
    },
    {
      question: 'Можно ли кататься в дождь?',
      answer: 'Не рекомендуется. Самокаты водонепроницаемы, но тормозной путь увеличивается. В сильный дождь аренда автоматически приостанавливается.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="Leaf" className="text-green-600" size={32} />
              <span className="text-2xl font-bold text-green-800">ЭкоСамокат</span>
            </div>
            <div className="hidden md:flex gap-6">
              <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-green-600 transition-colors">
                Главная
              </button>
              <button onClick={() => scrollToSection('tariffs')} className="text-gray-700 hover:text-green-600 transition-colors">
                Тарифы
              </button>
              <button onClick={() => scrollToSection('map')} className="text-gray-700 hover:text-green-600 transition-colors">
                Карта
              </button>
              <button onClick={() => scrollToSection('rules')} className="text-gray-700 hover:text-green-600 transition-colors">
                Правила
              </button>
              <button onClick={() => scrollToSection('contacts')} className="text-gray-700 hover:text-green-600 transition-colors">
                Контакты
              </button>
            </div>
            <Button className="bg-green-600 hover:bg-green-700">
              <Icon name="Smartphone" size={18} className="mr-2" />
              Скачать приложение
            </Button>
          </div>
        </div>
      </nav>

      <section id="home" className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <Badge className="mb-4 bg-green-100 text-green-800 hover:bg-green-200">
                🌱 Экологичный транспорт
              </Badge>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Двигайся к будущему на электросамокате
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Быстро, удобно и экологично. Аренда электросамокатов в вашем городе от 5 ₽ за минуту.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-green-600 hover:bg-green-700 text-lg">
                  <Icon name="Play" size={20} className="mr-2" />
                  Начать поездку
                </Button>
                <Button size="lg" variant="outline" className="text-lg border-green-600 text-green-600 hover:bg-green-50">
                  <Icon name="Map" size={20} className="mr-2" />
                  Смотреть карту
                </Button>
              </div>
              <div className="mt-12 grid grid-cols-3 gap-6">
                <div>
                  <div className="text-3xl font-bold text-green-600">500+</div>
                  <div className="text-sm text-gray-600">Самокатов</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-green-600">50+</div>
                  <div className="text-sm text-gray-600">Точек аренды</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-green-600">0</div>
                  <div className="text-sm text-gray-600">Выбросов CO₂</div>
                </div>
              </div>
            </div>
            <div className="animate-scale-in">
              <img 
                src="https://cdn.poehali.dev/projects/f9f56473-4f2d-4216-a2ba-3c1360a235bf/files/0afff7e9-aafe-4bdb-bd97-9a87921b9b93.jpg" 
                alt="Электросамокат" 
                className="rounded-3xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="tariffs" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-lime-100 text-lime-800">Тарифы</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Выберите удобный тариф</h2>
            <p className="text-xl text-gray-600">Гибкая система оплаты для любых задач</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {tariffs.map((tariff, index) => (
              <Card key={index} className={`${tariff.color} border-2 relative transition-all hover:shadow-xl hover:-translate-y-1 animate-fade-in`} style={{ animationDelay: `${index * 0.1}s` }}>
                {tariff.popular && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-green-600">
                    Популярный
                  </Badge>
                )}
                <CardHeader>
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4 shadow-md">
                    <Icon name={tariff.icon as any} size={32} className="text-green-600" />
                  </div>
                  <CardTitle className="text-2xl">{tariff.name}</CardTitle>
                  <CardDescription className="text-3xl font-bold text-gray-900 mt-2">
                    {tariff.price} <span className="text-lg font-normal text-gray-600">/ {tariff.unit}</span>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {tariff.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Icon name="Check" size={20} className="text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full mt-6 bg-green-600 hover:bg-green-700">
                    Выбрать тариф
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="map" className="py-20 px-4 bg-gradient-to-b from-white to-green-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-green-100 text-green-800">Карта точек</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Найдите ближайший самокат</h2>
            <p className="text-xl text-gray-600">Более 50 точек аренды по всему городу</p>
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-3xl shadow-xl p-8 animate-fade-in">
              <div className="aspect-video bg-gradient-to-br from-green-100 to-lime-100 rounded-2xl flex items-center justify-center mb-6 overflow-hidden">
                <img 
                  src="https://cdn.poehali.dev/projects/f9f56473-4f2d-4216-a2ba-3c1360a235bf/files/bfbc967b-05e2-4d52-b7c9-15571bb7c1cb.jpg" 
                  alt="Карта города" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex items-center gap-4 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-600 rounded-full"></div>
                  <span>Много самокатов (10+)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-amber-500 rounded-full"></div>
                  <span>Мало самокатов (1-9)</span>
                </div>
              </div>
            </div>
            <div className="space-y-4 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <h3 className="text-2xl font-bold mb-6">Популярные точки аренды</h3>
              {rentalPoints.map((point, index) => (
                <Card key={index} className="hover:shadow-lg transition-all hover:-translate-y-0.5 cursor-pointer">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div>
                        <h4 className="font-semibold text-lg mb-1">{point.name}</h4>
                        <p className="text-gray-600 text-sm flex items-center gap-2">
                          <Icon name="MapPin" size={16} />
                          {point.address}
                        </p>
                      </div>
                      <Badge className={point.scooters >= 10 ? 'bg-green-100 text-green-800' : 'bg-amber-100 text-amber-800'}>
                        <Icon name="Bike" size={14} className="mr-1" />
                        {point.scooters} шт
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="rules" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-amber-100 text-amber-800">Правила</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Безопасность превыше всего</h2>
            <p className="text-xl text-gray-600">Ответы на частые вопросы</p>
          </div>
          <Accordion type="single" collapsible className="space-y-4">
            {rules.map((rule, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-2 border-gray-200 rounded-2xl px-6 bg-white hover:border-green-300 transition-colors">
                <AccordionTrigger className="text-lg font-semibold text-left hover:text-green-600">
                  {rule.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 pt-2">
                  {rule.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section id="contacts" className="py-20 px-4 bg-gradient-to-b from-white to-green-50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-green-100 text-green-800">Контакты</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Мы всегда на связи</h2>
            <p className="text-xl text-gray-600">Свяжитесь с нами удобным способом</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="text-center hover:shadow-xl transition-all hover:-translate-y-1">
              <CardContent className="pt-8 pb-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Phone" size={28} className="text-green-600" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Телефон</h3>
                <p className="text-gray-600">8 (800) 555-35-35</p>
                <p className="text-sm text-gray-500 mt-1">Круглосуточно</p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-xl transition-all hover:-translate-y-1">
              <CardContent className="pt-8 pb-8">
                <div className="w-16 h-16 bg-lime-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Mail" size={28} className="text-lime-600" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Email</h3>
                <p className="text-gray-600">info@ecosamokat.ru</p>
                <p className="text-sm text-gray-500 mt-1">Ответим за 1 час</p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-xl transition-all hover:-translate-y-1">
              <CardContent className="pt-8 pb-8">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="MessageCircle" size={28} className="text-amber-600" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Поддержка</h3>
                <p className="text-gray-600">Чат в приложении</p>
                <p className="text-sm text-gray-500 mt-1">Мгновенный ответ</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Leaf" className="text-green-500" size={28} />
                <span className="text-xl font-bold">ЭкоСамокат</span>
              </div>
              <p className="text-gray-400 text-sm">
                Экологичный транспорт для современного города
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-green-500 transition-colors">О нас</a></li>
                <li><a href="#" className="hover:text-green-500 transition-colors">Вакансии</a></li>
                <li><a href="#" className="hover:text-green-500 transition-colors">Блог</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Поддержка</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-green-500 transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-green-500 transition-colors">Безопасность</a></li>
                <li><a href="#" className="hover:text-green-500 transition-colors">Контакты</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Социальные сети</h4>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors">
                  <Icon name="Instagram" size={20} />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors">
                  <Icon name="Facebook" size={20} />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors">
                  <Icon name="Twitter" size={20} />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2024 ЭкоСамокат. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
