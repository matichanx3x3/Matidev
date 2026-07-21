const portfolioData = {
  projects: [
    {
      slug: 'altisdla-chronicles',
      title: 'Altisdla Chronicles',
      year: '2019',
      type: 'Proyecto final de carrera',
      event: 'Toulouse Lautrec',
      engine: 'Unity',
      duration: '5 meses',
      roles: ['Productor', 'Game Designer', 'Level Designer', 'VFX Designer'],
      tags: ['unity', 'diseño'],
      accent: 'violet',
      featured: true,
      image: 'assets/images/Altisdla.jpg',
      summary: 'Una aventura de combate construida desde una producción Scrum clara y una progresión diseñada para mantener al jugador en movimiento.',
      bullets: [
        'Estandaricé el flujo Scrum y coordiné cuatro áreas de producción.',
        'Elaboré GDD y LDD: mecánicas centrales, progresión y estructura de combate.',
        'Desarrollé feedback visual de habilidades, impactos y ambiente.'
      ]
    },
    {
      slug: 'al-ritmo-de-la-diablada',
      title: 'Al Ritmo de la Diablada',
      year: '2021',
      type: 'Ceviche Game Jam',
      event: 'Mejor Juego',
      engine: 'Unity',
      duration: '3 días',
      roles: ['Game Designer', 'Feedback Designer'],
      tags: ['premiado', 'unity', 'diseño'],
      accent: 'orange',
      featured: true,
      image: 'assets/images/AlritmoDiablada.png',
      summary: 'Un juego de ritmo que pone la cultura y la respuesta inmediata del jugador en el centro de la experiencia.',
      bullets: [
        'Diseñé mecánicas esenciales y el sistema de feedback al jugador.',
        'Estructuré la progresión rítmica a partir de referentes del género.',
        'Ganador del primer premio de la jam y con gran repercusión mediática en Perú.'
      ]
    },
    {
      slug: 'llamacumba',
      title: 'Llamacumba',
      year: '2021',
      type: 'Hacka Entel Gaming',
      event: 'Segundo puesto',
      engine: 'Unity',
      duration: '1 semana',
      roles: ['Game Designer', 'Systems Designer'],
      tags: ['premiado', 'unity', 'diseño'],
      accent: 'lime',
      featured: true,
      image: 'assets/images/Llamacumba.png',
      summary: 'Un sistema de juego basado en generación procedural, economía y combate, diseñado desde cero para una producción intensa.',
      bullets: [
        'Diseñé el sistema completo de generación procedural de niveles.',
        'Definí métricas de módulos, economía y sistema de combate.',
        'Segundo puesto y amplia repercusión mediática en Perú.'
      ]
    },
    {
      slug: 'fear-of-the-dark',
      title: 'Fear of The Dark',
      year: '2018',
      type: 'Proyecto académico',
      event: 'Toulouse Lautrec',
      engine: 'Unity',
      duration: '3 meses',
      roles: ['Game Designer', 'Level Designer'],
      tags: ['unity', 'diseño'],
      accent: 'blue',
      image: 'assets/images/HouseAfterMid.png',
      summary: 'Una experiencia de tensión progresiva donde el ritmo espacial y el game feel son las herramientas narrativas principales.',
      bullets: [
        'Lideré el diseño de mecánicas y definí el GDD base.',
        'Diseñé la estructura de niveles y su progresión emocional.',
        'Realicé level dressing para reforzar tensión y legibilidad.'
      ]
    },
    {
      slug: 'el-urcututo',
      title: 'El Urcututo',
      year: '2021',
      type: 'Game Jam Internacional',
      event: 'Mejor Temática · Tec de Monterrey',
      engine: 'Unity',
      duration: '1 día',
      roles: ['Game Designer', 'VFX Designer'],
      tags: ['premiado', 'unity', 'diseño'],
      accent: 'red',
      image: 'assets/images/ElUrcututo.png',
      summary: 'Un endless runner resuelto en menos de 24 horas con un gameplay loop directo, claro y expresivo.',
      bullets: [
        'Diseñé el core completo del juego en menos de 24 horas.',
        'Priorización de feedback visual y arte de alto impacto.',
        'Premio a mejor temática en la Game Jam internacional.'
      ]
    },
    {
      slug: 'limbospheric',
      title: 'Limbospheric',
      year: '2021',
      type: 'Women Game Jam',
      event: 'Puntuación perfecta del jurado',
      engine: 'Unity',
      duration: '3 días',
      roles: ['Game Designer', 'VFX Designer'],
      tags: ['premiado', 'unity', 'diseño'],
      accent: 'pink',
      image: 'assets/images/Limbospheric.png',
      summary: 'Dos minijuegos con identidad propia unidos por un fuerte foco en la claridad de sus efectos y sensaciones.',
      bullets: [
        'Diseñé dos sistemas: pesca y motor averiado.',
        'Equilibré dificultad y diversión de ambos minijuegos.',
        'Implementé VFX de agua, chispas y reflejos; puntuación perfecta del jurado.'
      ]
    },
    {
      slug: 'foner-the-house-cleaner',
      title: 'Foner, The House Cleaner',
      year: '2024',
      type: 'Málaga Jam Ed. 18',
      event: 'Game Jam',
      engine: 'Unity',
      duration: '3 días',
      roles: ['Programador principal', 'VFX Designer'],
      tags: ['unity'],
      accent: 'yellow',
      image: 'assets/images/Foner.jpg',
      summary: 'Una producción de jam donde asumí la base técnica para llevar la idea desde la interacción hasta la sensación visual.',
      bullets: [
        'Programé movimiento, cámara y core gameplay.',
        'Implementé shaders, VFX y sistemas de interacción en C#.',
        'Demostré versatilidad técnica en un equipo de producción rápida.'
      ]
    },
    {
      slug: 'bloopy',
      title: 'Bloopy',
      year: '2025',
      type: 'Málaga Jam Ed. 19',
      event: 'Game Jam',
      engine: 'Unity',
      duration: '3 días',
      roles: ['Programador principal', 'Game Designer'],
      tags: ['unity'],
      accent: 'red',
      image: 'assets/images/Bloppy.png',
      summary: 'Una producción de jam donde asumí la base técnica para llevar la idea desde la interacción hasta la sensación visual.',
      bullets: [
        'Programé movimiento, cámara y core gameplay.',
        'Implementé mecanicas de gameplay y sistemas de interacción en C#.',
        'Demostré versatilidad técnica en un equipo de producción rápida.'
      ]
    }
  ],
  media: [
    {
      name: 'Game Developer',
      focus: 'Desarrollo & producción',
      description: 'Análisis, postmortems y recursos para quienes hacen videojuegos.',
      url: 'https://www.gamedeveloper.com/',
      mark: 'GD'
    },
    {
      name: 'GDC',
      focus: 'Diseño & conocimiento',
      description: 'Charlas y aprendizajes de profesionales de toda la industria.',
      url: 'https://www.gdconf.com/',
      mark: 'GDC'
    },
    {
      name: 'GamesIndustry.biz',
      focus: 'Industria & negocio',
      description: 'Contexto sobre estudios, mercado y las personas detrás de los juegos.',
      url: 'https://www.gamesindustry.biz/',
      mark: 'GI'
    },
    {
      name: 'Eurogamer',
      focus: 'Cultura & crítica',
      description: 'Periodismo y perspectiva crítica sobre videojuegos y su cultura.',
      url: 'https://www.eurogamer.net/',
      mark: 'EG'
    },
    {
      name: 'Polygon',
      focus: 'Cultura & tendencias',
      description: 'Historias, análisis y tendencias del ecosistema del videojuego.',
      url: 'https://www.polygon.com/',
      mark: 'P'
    },
    {
      name: 'AnaitGames',
      focus: 'Medio en español',
      description: 'Crítica, actualidad y reflexión sobre videojuegos en español.',
      url: 'https://www.anaitgames.com/',
      mark: 'A'
    }
  ]
};
