// import { Locale, useTranslations } from 'next-intl';
// import { setRequestLocale } from 'next-intl/server';
// import { use } from 'react';
// import { Users, Clock, CheckCircle, Check, Settings, HeartHandshake } from 'lucide-react';
// import { ModalForm } from '@/components/ModalForm';
// import Image from 'next/image';

// type Props = {
//   params: Promise<{ locale: Locale }>;
// };

// // Данные сотрудников - можно вынести в отдельный файл или получать из API
// const teamMembers = [
//   {
//     id: 1,
//     name: 'Анна Иванова',
//     position: 'Директор по развитию',
//     photo: '/images/team/anna-ivanova.jpg',
//     alt: 'Анна Иванова - Директор по развитию'
//   },
//   {
//     id: 2,
//     name: 'Михаил Петров',
//     position: 'Ведущий консультант',
//     photo: '/images/team/mikhail-petrov.jpg',
//     alt: 'Михаил Петров - Ведущий консультант'
//   },
//   {
//     id: 3,
//     name: 'Елена Сидорова',
//     position: 'Специалист по работе с клиентами',
//     photo: '/images/team/elena-sidorova.jpg',
//     alt: 'Елена Сидорова - Специалист по работе с клиентами'
//   },
//   {
//     id: 4,
//     name: 'Дмитрий Козлов',
//     position: 'Аналитик',
//     photo: '/images/team/dmitry-kozlov.jpg',
//     alt: 'Дмитрий Козлов - Аналитик'
//   }
// ];

// export default function About({ params }: Props) {
//   const { locale } = use(params);

//   // Enable static rendering
//   setRequestLocale(locale);

//   const t = useTranslations('About');

//   return (
//     <main className="relative py-20 overflow-hidden">
//       {/* Декоративные элементы */}
//       <div className="absolute top-0 left-0 w-32 h-32 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
//       <div className="absolute top-0 right-0 w-48 h-48 bg-teal-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
//       <div className="absolute bottom-0 left-1/2 w-40 h-40 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>

//       <div className="container mx-auto px-4 relative z-10">
//         {/* Заголовок с акцентом */}
//         <div className="max-w-4xl mx-auto text-center mb-16">
//           <h1 className="text-4xl md:text-5xl font-bold mb-6 relative inline-block">
//             <span className="relative z-10 text-primary">{t('title')}</span>
//             {/* <span className="absolute bottom-0 left-0 w-full h-3 bg-blue-100 z-0 opacity-50"></span> */}
//           </h1>
//           <div className="w-24 h-1 bg-gradient-to-r bg-primary mx-auto mb-8"></div>
//         </div>

//         {/* Сетка разделов */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
//           {/* Кто мы */}
//           <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 border-l-4 border-primary">
//             <div className="flex items-start mb-6">
//               <div className="bg-blue-100 p-3 rounded-lg mr-4">
//                 <Users className="w-6 h-6 text-blue-600" />
//               </div>
//               <h2 className="text-2xl font-bold text-gray-800">{t('whoWeAre.title')}</h2>
//             </div>
//             <div className="space-y-4 text-gray-600">
//               <p>{t('whoWeAre.p1')}</p>
//               <p>{t('whoWeAre.p2')}</p>
//             </div>
//           </div>

//           {/* Наша история */}
//           <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 border-l-4 border-teal-500">
//             <div className="flex items-start mb-6">
//               <div className="bg-teal-100 p-3 rounded-lg mr-4">
//                 <Clock className="w-6 h-6 text-teal-600" />
//               </div>
//               <h2 className="text-2xl font-bold text-gray-800">{t('history.title')}</h2>
//             </div>
//             <div className="space-y-4 text-gray-600">
//               <p>{t('history.p1')}</p>
//               <p>{t('history.p2')}</p>
//             </div>
//           </div>

//           {/* Раздел команды */}
//           <div className="max-w-6xl mx-auto mt-20">
//             <div className="text-center mb-12">
//               <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
//                 {t('teamMembers.title') || 'Наша команда'}
//               </h2>
//               <p className="text-gray-600 max-w-2xl mx-auto">
//                 {t('teamMembers.subtitle') || 'Познакомьтесь с профессионалами, которые делают наш сервис лучше каждый день'}
//               </p>
//             </div>

//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//               {teamMembers.map((member) => (
//                 <div
//                   key={member.id}
//                   className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 text-center group"
//                 >
//                   {/* Фотография */}
//                   <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden ring-4 ring-gray-100 group-hover:ring-blue-200 transition-all duration-300">
//                     <Image
//                       src={member.photo}
//                       alt={member.alt}
//                       fill
//                       className="object-cover group-hover:scale-110 transition-transform duration-300"
//                       sizes="(max-width: 768px) 128px, 128px"
//                     />
//                   </div>

//                   {/* Информация */}
//                   <div>
//                     <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
//                       {member.name}
//                     </h3>
//                     <p className="text-gray-600 text-sm">
//                       {member.position}
//                     </p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Что мы предлагаем */}
//           {/* <div className="lg:col-span-2 bg-gradient-to-r from-blue-50 to-teal-50 p-8 rounded-2xl shadow-xl">
//             <div className="flex items-start mb-6">
//               <div className="bg-primary p-3 rounded-lg mr-4">
//                 <CheckCircle className="w-6 h-6 text-white" />
//               </div>
//               <h2 className="text-2xl font-bold text-gray-800">{t('services.title')}</h2>
//             </div>

//             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//               {[0, 1, 2, 3, 4, 5].map((i) => (
//                 <div key={i} className="flex items-start">
//                   <Check className="w-5 h-5 text-blue-600 mt-0.5 mr-2 flex-shrink-0" />
//                   <p className="text-gray-600">{t(`services.items.${i}`)}</p>
//                 </div>
//               ))}
//             </div>

//             <div className="mt-6 p-4 bg-white rounded-lg border border-gray-200">
//               <p className="text-gray-600 italic">{t('services.note')}</p>
//             </div>
//           </div> */}

//           {/* Как мы работаем */}
//           {/* <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 border-l-4 border-purple-500">
//             <div className="flex items-start mb-6">
//               <div className="bg-purple-100 p-3 rounded-lg mr-4">
//                 <Settings className="w-6 h-6 text-purple-600" />
//               </div>
//               <h2 className="text-2xl font-bold text-gray-800">{t('workflow.title')}</h2>
//             </div>
//             <div className="space-y-4 text-gray-600">
//               <p>{t('workflow.p1')}</p>
//               <p>{t('workflow.p2')}</p>
//             </div>
//           </div> */}

//           {/* Кто за этим стоит */}
//           {/* <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 border-l-4 border-indigo-500">
//             <div className="flex items-start mb-6">
//               <div className="bg-indigo-100 p-3 rounded-lg mr-4">
//                 <HeartHandshake className="w-6 h-6 text-indigo-600" />
//               </div>
//               <h2 className="text-2xl font-bold text-gray-800">{t('team.title')}</h2>
//             </div>
//             <div className="space-y-4 text-gray-600">
//               <p>{t('team.p1')}</p>
//               <p>{t('team.p2')}</p>
//             </div>
//           </div> */}
//         </div>



//         {/* CTA */}
//         <div className="max-w-4xl mx-auto mt-20 text-center bg-gradient-to-r from-blue-600 to-teal-500 p-8 rounded-2xl shadow-2xl relative overflow-hidden">
//           <div className="absolute top-0 left-0 w-full h-full bg-noise opacity-10"></div>
//           <div className="relative z-10">
//             <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">{t('cta.title')}</h2>
//             <p className="text-blue-100 mb-6 max-w-2xl mx-auto">{t('cta.description')}</p>
//             <ModalForm />
//           </div>
//         </div>
//       </div>
//     </main>
//   );
// }