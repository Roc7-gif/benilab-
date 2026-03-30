import React, { useState } from 'react';

const BlogPage = () => {
  const [activeFilter, setActiveFilter] = useState('Tous');
  const [searchTerm, setSearchTerm] = useState('');

  
    

  const filters = ['Tous', 'Tutoriels', 'Actualités', 'Entrepreneuriat', 'Cybersécurité', 'Développement'];

  const featuredArticle = {
    id: 1,
    title: "Les Tendances Tech en Afrique de l'Ouest en 2025",
    category: "Innovation",
    date: "28 mars 2026",
    author: "Bénon Koudoufio",
    authorInitial: "B",
    excerpt: "Découvrez les technologies qui transforment l'Afrique de l'Ouest : IA, fintech, agritech et souveraineté numérique.",
    views: 127,
    tags: ["#technologie", "#afrique", "#innovation", "#2025"],
    gradient: "from-gray-400/20 to-gray-600/20"
  };

  const articles = [
    {
      id: 2,
      title: "Guide Complet : Configurer un Réseau Cisco en Entreprise",
      category: "Technique",
      date: "28 mars 2026",
      author: "Aurore Agossou",
      authorInitial: "A",
      excerpt: "Tutoriel pas à pas pour configurer votre réseau Cisco : VLANs, routage inter-VLAN et sécurité.",
      views: 89,
      tags: ["#cisco", "#réseau", "#vlan"],
      gradient: "from-gray-400/20 to-gray-600/20",
      bgColor: "from-gray-400/20 to-gray-600/20"
    },
    {
      id: 3,
      title: "Comment Financer sa Formation IT au Bénin ?",
      category: "Formation",
      date: "28 mars 2026",
      author: "Clarisse Dangnivo",
      authorInitial: "C",
      excerpt: "Les différentes options de financement disponibles pour les professionnels souhaitant se former en informatique au Bénin.",
      views: 65,
      tags: ["#formation", "#financement", "#bénin"],
      gradient: "from-gray-400/20 to-gray-600/20",
      bgColor: "from-gray-400/20 to-gray-600/20"
    },
    {
      id: 4,
      title: "Cybersécurité : Les 10 Erreurs à Éviter en PME",
      category: "Cybersécurité",
      date: "28 mars 2026",
      author: "Rodrigue Dossou",
      authorInitial: "R",
      excerpt: "Les erreurs de sécurité informatique les plus courantes dans les PME africaines et comment les corriger.",
      views: 203,
      tags: ["#cybersécurité", "#PME", "#sécurité"],
      gradient: "from-red-500/25 via-red-600/15 to-rose-700/20",
      bgColor: "from-red-500/25 to-rose-700/20"
    },
    {
      id: 5,
      title: "React.js vs Vue.js : Quel Framework Choisir en 2025 ?",
      category: "Développement",
      date: "28 mars 2026",
      author: "Félix Hounsou",
      authorInitial: "F",
      excerpt: "Comparaison détaillée de React.js et Vue.js pour vous aider à choisir le bon framework pour votre prochain projet.",
      views: 156,
      tags: ["#react", "#vue", "#javascript"],
      gradient: "from-violet-500/25 via-purple-600/15 to-fuchsia-600/20",
      bgColor: "from-violet-500/25 to-fuchsia-600/20"
    },
    {
      id: 6,
      title: "L'Importance de la Documentation dans les Projets IT",
      category: "Gestion de Projet",
      date: "28 mars 2026",
      author: "Bénon Koudoufio",
      authorInitial: "B",
      excerpt: "Pourquoi la documentation est indispensable dans les projets informatiques et comment la réaliser efficacement.",
      views: 44,
      tags: ["#documentation", "#gestion de projet", "#best practices"],
      gradient: "from-gray-400/20 to-gray-600/20",
      bgColor: "from-gray-400/20 to-gray-600/20"
    }
  ];

  const popularTags = [
    "#technologie", "#afrique", "#innovation", "#2025", "#cisco",
    "#réseau", "#vlan", "#ccna", "#tutoriel", "#formation",
    "#financement", "#bénin", "#IT", "#carrière", "#cybersécurité", "#PME"
  ];

  const filteredArticles = articles.filter(article => {
    const matchesFilter = activeFilter === 'Tous' || article.category === activeFilter;
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          article.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const getCategoryBadgeStyle = (category) => {
    const styles = {
      'Innovation': 'bg-gray-100 text-gray-700 border-gray-200',
      'Technique': 'bg-gray-100 text-gray-700 border-gray-200',
      'Formation': 'bg-gray-100 text-gray-700 border-gray-200',
      'Cybersécurité': 'bg-red-100 text-red-700 border-red-200',
      'Développement': 'bg-violet-100 text-violet-700 border-violet-200',
      'Gestion de Projet': 'bg-gray-100 text-gray-700 border-gray-200'
    };
    return styles[category] || 'bg-gray-100 text-gray-700 border-gray-200';
  };

  const getFilterIcon = (filter) => {
    const icons = {
      'Tous': <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect width="7" height="7" x="3" y="3" rx="1" /><rect width="7" height="7" x="14" y="3" rx="1" /><rect width="7" height="7" x="14" y="14" rx="1" /><rect width="7" height="7" x="3" y="14" rx="1" /></svg>,
      'Tutoriels': <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 7v14M3 18a1 1 0 01-1-1V4a1 1 0 011-1h5a4 4 0 014 4 4 4 0 014-4h5a1 1 0 011 1v13a1 1 0 01-1 1h-6a3 3 0 00-3 3 3 3 0 00-3-3z" /></svg>,
      'Actualités': <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M15 18h-5M18 14h-8M4 22h16a2 2 0 002-2V4a2 2 0 00-2-2H8a2 2 0 00-2 2v16a2 2 0 01-4 0v-9a2 2 0 012-2h2" /><rect width="8" height="4" x="10" y="6" rx="1" /></svg>,
      'Entrepreneuriat': <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M16 7h6v6M22 7l-8.5 8.5-5-5L2 17" /></svg>,
      'Cybersécurité': <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12.586 2.586A2 2 0 0011.172 2H4a2 2 0 00-2 2v7.172a2 2 0 00.586 1.414l8.704 8.704a2.426 2.426 0 003.42 0l6.58-6.58a2.426 2.426 0 000-3.42z" /><circle cx="7.5" cy="7.5" r=".5" fill="currentColor" /></svg>,
      'Développement': <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12.586 2.586A2 2 0 0011.172 2H4a2 2 0 00-2 2v7.172a2 2 0 00.586 1.414l8.704 8.704a2.426 2.426 0 003.42 0l6.58-6.58a2.426 2.426 0 000-3.42z" /><circle cx="7.5" cy="7.5" r=".5" fill="currentColor" /></svg>
    };
    return icons[filter] || icons['Tous'];
  };

  return (
    <>
        {/* Hero Section */}
        <section className="py-20 sm:py-28 relative overflow-hidden" style={{
          backgroundColor: '#0A1F29',
          backgroundImage: `radial-gradient(80% 60% at 50% -20%, rgba(28, 116, 160, 0.2) 0%, transparent 60%),
                           radial-gradient(60% 50% at 80% 60%, rgba(249, 112, 21, 0.08) 0%, transparent 50%),
                           radial-gradient(50% 40% at 20% 80%, rgba(27, 157, 74, 0.06) 0%, transparent 50%)`
        }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
            <div className="inline-flex items-center gap-2 bg-[#2D9BD2]/20 border border-[#2D9BD2]/30 rounded-full px-4 py-1.5 mb-6">
              <span className="text-xs font-semibold text-[#2D9BD2] uppercase tracking-wider">Le Blog BENILAB</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white font-heading tracking-tight mb-5">
              Notre&nbsp;
              <span className="bg-linear-to-r from-[#F97015] to-[#F99E1F] bg-clip-text text-transparent">Blog</span>
            </h1>
            <p className="text-lg sm:text-xl text-white/70 max-w-xl mx-auto leading-relaxed mb-10">
              Actualités IT, tutoriels et insights sur la tech en Afrique
            </p>
            <div className="max-w-lg mx-auto">
              <div className="relative">
                <svg className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-[#7B899D] pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.34-4.34M11 19a8 8 0 100-16 8 8 0 000 16z" />
                </svg>
                <input
                  type="text"
                  placeholder="Rechercher un article, un sujet..."
                  className="w-full pl-11 pr-16 py-3 rounded-full bg-[#0B1119]/90 backdrop-blur-sm border border-[#243042] text-[#DCE0E5] placeholder:text-[#7B899D] focus:outline-none focus:ring-2 focus:ring-[#2D9BD2] shadow-lg"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
            <div className="flex items-center justify-center gap-8 mt-10">
              <div className="text-center">
                <p className="text-xl font-bold text-white font-heading">6+</p>
                <p className="text-xs text-white/50 mt-0.5">Articles</p>
              </div>
              <div className="text-center">
                <p className="text-xl font-bold text-white font-heading">6</p>
                <p className="text-xs text-white/50 mt-0.5">Catégories</p>
              </div>
              <div className="text-center">
                <p className="text-xl font-bold text-white font-heading">3</p>
                <p className="text-xs text-white/50 mt-0.5">Auteurs</p>
              </div>
            </div>
          </div>
        </section>

        {/* Sticky Filter Bar */}
        <section className="sticky top-[4rem] lg:top-[5rem] z-20 bg-[#0B1119]/95 backdrop-blur-md border-b border-[#243042] shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
            <div className="flex items-center gap-2 overflow-x-auto scrollbar-hide pb-0.5">
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition-all duration-200 border flex-shrink-0 ${
                    activeFilter === filter
                      ? 'bg-[#2D9BD2] text-white border-[#2D9BD2] shadow-md scale-[1.03]'
                      : 'bg-[#202C3C]/50 text-[#B6BEC9] border-[#243042] hover:border-[#2D9BD2]/40 hover:text-[#2D9BD2] hover:bg-[#2D9BD2]/5'
                  }`}
                >
                  {getFilterIcon(filter)}
                  {filter}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Articles Section */}
        <section className="py-14 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-12">
              {/* Featured Article */}
              {searchTerm === '' && activeFilter === 'Tous' && (
                <div className="animate-fade-in">
                  <div className="flex items-center gap-2 mb-5">
                    <div className="w-1 h-5 bg-[#2D9BD2] rounded-full"></div>
                    <h2 className="text-sm font-bold text-[#DCE0E5] uppercase tracking-wider">Article à la une</h2>
                  </div>
                  <article className="group bg-[#121A26] border border-[#243042] rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                    <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[300px]">
                      <div className={`relative bg-linear-to-br ${featuredArticle.gradient} flex items-center justify-center min-h-[220px] lg:min-h-0 overflow-hidden`}>
                        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(rgba(220,224,229,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(220,224,229,0.4) 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
                        <svg className="h-24 w-24 text-[#DCE0E5]/20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path d="M12 7v14M3 18a1 1 0 01-1-1V4a1 1 0 011-1h5a4 4 0 014 4 4 4 0 014-4h5a1 1 0 011 1v13a1 1 0 01-1 1h-6a3 3 0 00-3 3 3 3 0 00-3-3z" />
                        </svg>
                        <div className="absolute top-4 left-4 flex items-center gap-1.5 bg-[#2D9BD2] text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-md">
                          <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path d="M16 7h6v6M22 7l-8.5 8.5-5-5L2 17" />
                          </svg>
                          Article à la une
                        </div>
                        <div className="absolute bottom-4 right-4 flex items-center gap-1 bg-black/30 backdrop-blur-sm text-white text-xs font-medium px-2.5 py-1.5 rounded-full">
                          <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path d="M2.062 12.348a1 1 0 010-.696 10.75 10.75 0 0119.876 0 1 1 0 010 .696 10.75 10.75 0 01-19.876 0M12 12a3 3 0 100-6 3 3 0 000 6z" />
                          </svg>
                          {featuredArticle.views}&nbsp;vues
                        </div>
                        <div className="absolute inset-0 bg-[#DCE0E5]/0 group-hover:bg-[#DCE0E5]/5 transition-colors duration-300"></div>
                      </div>
                      <div className="p-8 flex flex-col justify-center">
                        <div className="flex items-center gap-3 mb-4">
                          <span className={`inline-flex items-center text-xs font-semibold px-2.5 py-1 rounded-full border ${getCategoryBadgeStyle(featuredArticle.category)}`}>
                            {featuredArticle.category}
                          </span>
                          <span className="flex items-center gap-1 text-xs text-[#7B899D]">
                            <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <rect x="3" y="4" width="18" height="18" rx="2" />
                              <path d="M8 2v4M16 2v4M3 10h18" />
                            </svg>
                            {featuredArticle.date}
                          </span>
                        </div>
                        <h2 className="text-2xl sm:text-3xl font-bold text-[#DCE0E5] font-heading mb-3 leading-tight group-hover:text-[#2D9BD2] transition-colors duration-200">
                          {featuredArticle.title}
                        </h2>
                        <p className="text-[#7B899D] leading-relaxed mb-5 text-sm line-clamp-3">{featuredArticle.excerpt}</p>
                        <div className="flex flex-wrap gap-1.5 mb-5">
                          {featuredArticle.tags.map((tag, idx) => (
                            <span key={idx} className="text-xs bg-[#202C3C] text-[#7B899D] px-2 py-0.5 rounded-full">{tag}</span>
                          ))}
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="w-9 h-9 rounded-full bg-[#2D9BD2]/10 flex items-center justify-center sihrnk-0">
                              <svg className="h-4 w-4 text-[#2D9BD2]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path d="M19 21v-2a4 4 0 00-4-4H9a4 4 0 00-4 4v2M12 7a4 4 0 100-8 4 4 0 000 8z" />
                              </svg>
                            </div>
                            <div>
                              <p className="text-sm font-semibold text-[#DCE0E5]">{featuredArticle.author}</p>
                              <p className="text-xs text-[#7B899D]">Auteur</p>
                            </div>
                          </div>
                          <a href={`/blog/article-${featuredArticle.id}`}>
                            <button className="inline-flex items-center justify-center gap-2 h-9 px-4 py-2 bg-[#2D9BD2] text-white hover:bg-[#2D9BD2]/90 font-semibold rounded-xl transition-all">
                              Lire l'article
                              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                              </svg>
                            </button>
                          </a>
                        </div>
                      </div>
                    </div>
                  </article>
                </div>
              )}

              {/* All Articles */}
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <div className="w-1 h-5 bg-[#28BD5F] rounded-full"></div>
                    <h2 className="text-sm font-bold text-[#DCE0E5] uppercase tracking-wider">Tous les articles</h2>
                  </div>
                  <span className="text-xs text-[#7B899D] bg-[#202C3C]/50 px-3 py-1 rounded-full">{filteredArticles.length} articles</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredArticles.map((article, idx) => (
                    <article key={article.id |idx} className="group bg-[#121A26] border border-[#243042] rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col h-full">
                      <div className={`relative h-40 bg-linear-to-br ${article.bgColor} flex items-center justify-center overflow-hidden`}>
                        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 30% 70%, white 1px, transparent 1px), radial-gradient(circle at 70% 30%, white 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
                        <svg className="h-12 w-12 text-gray-400 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path d="M12 7v14M3 18a1 1 0 01-1-1V4a1 1 0 011-1h5a4 4 0 014 4 4 4 0 014-4h5a1 1 0 011 1v13a1 1 0 01-1 1h-6a3 3 0 00-3 3 3 3 0 00-3-3z" />
                        </svg>
                        <div className="absolute inset-0 bg-[#DCE0E5]/0 group-hover:bg-[#DCE0E5]/5 transition-colors duration-300"></div>
                        <div className="absolute top-3 right-3 flex items-center gap-1 bg-black/30 backdrop-blur-sm text-white text-xs font-medium px-2 py-1 rounded-full">
                          <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path d="M2.062 12.348a1 1 0 010-.696 10.75 10.75 0 0119.876 0 1 1 0 010 .696 10.75 10.75 0 01-19.876 0M12 12a3 3 0 100-6 3 3 0 000 6z" />
                          </svg>
                          {article.views}
                        </div>
                      </div>
                      <div className="p-5 flex flex-col flex-1">
                        <div className="flex items-center justify-between mb-3">
                          <span className={`inline-flex items-center text-xs font-semibold px-2.5 py-1 rounded-full border ${getCategoryBadgeStyle(article.category)}`}>
                            {article.category}
                          </span>
                          <span className="flex items-center gap-1 text-xs text-[#7B899D]">
                            <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <rect x="3" y="4" width="18" height="18" rx="2" />
                              <path d="M8 2v4M16 2v4M3 10h18" />
                            </svg>
                            {article.date}
                          </span>
                        </div>
                        <h3 className="font-bold text-[#DCE0E5] text-base font-heading mb-2 leading-snug group-hover:text-[#2D9BD2] transition-colors duration-200 line-clamp-2">
                          {article.title}
                        </h3>
                        <p className="text-sm text-[#7B899D] leading-relaxed mb-4 line-clamp-3 flex-1">{article.excerpt}</p>
                        <div className="flex flex-wrap gap-1.5 mb-4">
                          {article.tags.map((tag, tagIdx) => (
                            <span key={tagIdx} className="text-xs bg-[#202C3C] text-[#7B899D] px-2 py-0.5 rounded-full">{tag}</span>
                          ))}
                        </div>
                        <div className="flex items-center justify-between pt-3 border-t border-[#243042] mt-auto">
                          <div className="flex items-center gap-2">
                            <div className="w-7 h-7 rounded-full bg-[#2D9BD2]/10 flex items-center justify-center flex-shrink-0">
                              <svg className="h-3.5 w-3.5 text-[#2D9BD2]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path d="M19 21v-2a4 4 0 00-4-4H9a4 4 0 00-4 4v2M12 7a4 4 0 100-8 4 4 0 000 8z" />
                              </svg>
                            </div>
                            <span className="text-xs font-medium text-[#DCE0E5] truncate max-w-[110px]">{article.author}</span>
                          </div>
                          <a href={`/blog/article-${article.id}`}>
                            <button className="inline-flex items-center justify-center gap-1 h-7 text-xs bg-[#2D9BD2] text-white hover:bg-[#2D9BD2]/90 font-semibold px-3 rounded-xl transition-all">
                              Lire la suite
                              <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                              </svg>
                            </button>
                          </a>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Popular Tags */}
        <section className="py-10 bg-[#202C3C]/20 border-y border-[#243042]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 flex-wrap">
              <div className="flex items-center gap-2 text-sm font-semibold text-[#DCE0E5]">
                <svg className="h-4 w-4 text-[#2D9BD2]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M12.586 2.586A2 2 0 0011.172 2H4a2 2 0 00-2 2v7.172a2 2 0 00.586 1.414l8.704 8.704a2.426 2.426 0 003.42 0l6.58-6.58a2.426 2.426 0 000-3.42z" />
                  <circle cx="7.5" cy="7.5" r=".5" fill="currentColor" />
                </svg>
                Tags populaires :
              </div>
              {popularTags.map((tag, idx) => (
                <button
                  key={idx}
                  onClick={() => setSearchTerm(tag.substring(1))}
                  className="text-xs font-medium text-[#7B899D] bg-[#0B1119] border border-[#243042] px-3 py-1.5 rounded-full hover:border-[#2D9BD2] hover:text-[#2D9BD2] transition-all duration-200 hover:shadow-sm"
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-20 overflow-hidden relative" style={{
          background: 'linear-gradient(135deg, #0A1F29, #173645)'
        }}>
          <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-[#2D9BD2]/10 blur-3xl pointer-events-none"></div>
          <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-[#28BD5F]/10 blur-3xl pointer-events-none"></div>
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
            <div className="inline-flex items-center gap-2 bg-[#2D9BD2]/20 border border-[#2D9BD2]/30 rounded-full px-4 py-1.5 mb-6">
              <svg className="h-3.5 w-3.5 text-[#2D9BD2]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M14.536 21.686a.5.5 0 00.937-.024l6.5-19a.496.496 0 00-.635-.635l-19 6.5a.5.5 0 00-.024.937l7.93 3.18a2 2 0 011.112 1.11zM21.854 2.147l-10.94 10.939" />
              </svg>
              <span className="text-xs font-semibold text-[#2D9BD2] uppercase tracking-wider">Newsletter BENILAB</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white font-heading mb-4">
              Restez informé des&nbsp;
              <span className="bg-linear-to-r from-[#F97015] to-[#F99E1F] bg-clip-text text-transparent">dernières tendances</span>
              &nbsp;IT
            </h2>
            <p className="text-white/70 text-base mb-8 max-w-xl mx-auto leading-relaxed">
              Recevez chaque semaine nos meilleurs articles, tutoriels et actualités tech directement dans votre boîte mail. Zéro spam, que du contenu de valeur.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="votre@email.com"
                className="flex-1 h-12 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:border-[#2D9BD2] focus:bg-white/15 px-4 shadow-sm transition-all"
              />
              <button type="submit" className="inline-flex items-center justify-center gap-2 h-12 px-6 bg-[#2D9BD2] text-white hover:bg-[#2D9BD2]/90 font-semibold rounded-xl shadow-lg transition-all">
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M14.536 21.686a.5.5 0 00.937-.024l6.5-19a.496.496 0 00-.635-.635l-19 6.5a.5.5 0 00-.024.937l7.93 3.18a2 2 0 011.112 1.11zM21.854 2.147l-10.94 10.939" />
                </svg>
                S'abonner
              </button>
            </form>
            <p className="text-white/40 text-xs mt-4">Désabonnement possible à tout moment. Conforme RGPD.</p>
            <div className="flex justify-center gap-10 mt-10">
              <div className="text-center">
                <p className="text-2xl font-bold text-white font-heading">500+</p>
                <p className="text-xs text-white/50 mt-0.5">Abonnés</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-white font-heading">2×/mois</p>
                <p className="text-xs text-white/50 mt-0.5">Fréquence</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-white font-heading">0</p>
                <p className="text-xs text-white/50 mt-0.5">Spam</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contribute CTA */}
        <section className="py-16 bg-[#0B1119]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-[#121A26] border border-[#243042] rounded-2xl p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-xl font-bold text-[#DCE0E5] font-heading mb-2">Vous souhaitez publier sur notre blog ?</h3>
                <p className="text-[#7B899D] text-sm max-w-sm">Partagez votre expertise avec la communauté tech d'Afrique de l'Ouest.</p>
              </div>
              <a href="/contact">
                <button className="inline-flex items-center justify-center gap-2 h-9 px-4 py-2 bg-[#2D9BD2] text-white hover:bg-[#2D9BD2]/90 font-semibold rounded-xl shadow-md transition-all">
                  Proposer un article
                </button>
              </a>
            </div>
          </div>
          </section>
           <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .animate-fade-in {
          animation: fadeIn 0.4s ease-out forwards;
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
      </>

     
  );
};

export default BlogPage;