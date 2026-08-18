// Pre-seeded projects data (fallback for offline/local file-preview testing)
const SEED_PROJECTS = [
    {
        "id": "c1",
        "title": "Pavillon Wycart",
        "category": "construction",
        "description": "Structure de grande envergure conçue selon les assemblages traditionnels à clef et tenons-mortaises. Un ouvrage robuste et intemporel.",
        "image": "./images/construction/wycart.jpg",
        "date": "2026-05-10"
    },
    {
        "id": "c2",
        "title": "Art de l'Assemblage Bois-Bois",
        "category": "construction",
        "description": "Détail technique d'un assemblage traditionnel complexe assemblé par embrèvement et cheville bois, garantissant une flexibilité structurelle optimale.",
        "image": "./images/gallerie/assemblage.jpg",
        "date": "2026-06-02"
    },
    {
        "id": "c3",
        "title": "Tiroir d'assemblages traditionnels",
        "category": "construction",
        "description": "Échantillons d'assemblages à tenon et mortaise façonnés à l'atelier pour valider les liaisons bois-bois sur mesure.",
        "image": "./images/gallerie/assemblaggi.jpg",
        "date": "2026-06-05"
    },
    {
        "id": "c4",
        "title": "Équarrissage de grume au cordon",
        "category": "construction",
        "description": "Révélation des fibres du bois par taille manuelle. Chaque poutre garde l'empreinte unique de l'arbre et de la hache.",
        "image": "./images/gallerie/equarrie.jpeg",
        "date": "2026-04-18"
    },
    {
        "id": "r1",
        "title": "Rénovation de la Charpente Mongardain",
        "category": "renovation",
        "description": "Restauration complète d'une grange du XIXe siècle avec greffe de bois de chêne équarri à la hache et recalage des pannes.",
        "image": "./images/renovation/Mongardain.jpg",
        "date": "2026-02-15"
    },
    {
        "id": "r2",
        "title": "Charpente Mongarain",
        "category": "renovation",
        "description": "Sauvegarde structurelle d'une ferme de pays. Consolidation des arbalétriers et reprise des appuis de sablières.",
        "image": "./images/renovation/Mongarain.jpg",
        "date": "2026-02-28"
    },
    {
        "id": "r3",
        "title": "Restauration du Balcon Suspendu",
        "category": "renovation",
        "description": "Remplacement à l'identique de consoles en bois de pin sylvestre et garde-corps chevillés à l'ancienne.",
        "image": "./images/renovation/balcon 1.1.jpg",
        "date": "2026-03-05"
    },
    {
        "id": "r4",
        "title": "Balcon Traditionnel Double",
        "category": "renovation",
        "description": "Vue d'ensemble du balcon restauré s'intégrant parfaitement dans l'architecture locale en pierre sèche.",
        "image": "./images/renovation/balcon 2.3.jpg",
        "date": "2026-03-08"
    },
    {
        "id": "r5",
        "title": "Finitions de console de balcon",
        "category": "renovation",
        "description": "Ajustement précis sous les entraits pour assurer l'écoulement des eaux et la longévité de l'ouvrage.",
        "image": "./images/gallerie/balcon 1.2.jpg",
        "date": "2026-03-06"
    },
    {
        "id": "r6",
        "title": "Détails structurels du balcon",
        "category": "renovation",
        "description": "Vue rapprochée d'une console de balcon chevillée prête pour le ponçage final.",
        "image": "./images/gallerie/balcon 2.2.jpg",
        "date": "2026-03-07"
    },
    {
        "id": "r7",
        "title": "Équarrissage manuel à la doloire",
        "category": "renovation",
        "description": "Taille de pièces de rechange pour charpente ancienne à l'aide d'outils à main d'époque.",
        "image": "./images/renovation/equarrie (2).jpeg",
        "date": "2026-04-01"
    },
    {
        "id": "r8",
        "title": "Traces d'outils ancestraux",
        "category": "renovation",
        "description": "Poutre fraîchement dressée révélant les ondulations typiques de la taille à la hache.",
        "image": "./images/renovation/equarrie 3.jpg",
        "date": "2026-04-03"
    },
    {
        "id": "r9",
        "title": "Les outils de l'artisan",
        "category": "renovation",
        "description": "Haches d'équarrissage, doloires et herminettes prêtes pour le travail du jour. Mes fidèles alliées.",
        "image": "./images/renovation/haches.jpg",
        "date": "2026-01-20"
    },
    {
        "id": "r10",
        "title": "Reprise de Charpente Karma - Étape 1",
        "category": "renovation",
        "description": "Analyse structurelle et découpe des zones dégradées par l'humidité sur une toiture ancienne.",
        "image": "./images/renovation/karma 1.jpg",
        "date": "2026-05-15"
    },
    {
        "id": "r11",
        "title": "Reprise de Charpente Karma - Ajustement",
        "category": "renovation",
        "description": "Positionnement minutieux de la greffe en bois sain (chêne de pays) sur la ferme principale.",
        "image": "./images/renovation/karma 2.3.jpg",
        "date": "2026-05-17"
    },
    {
        "id": "r12",
        "title": "Échafaudage de Karma",
        "category": "renovation",
        "description": "Mise en sécurité du chantier Karma sous un ciel de montagne pour le remplacement de la panne faitière.",
        "image": "./images/renovation/karma1.1.jpg",
        "date": "2026-05-14"
    },
    {
        "id": "r13",
        "title": "Ajustement du sous-faîtage Karma",
        "category": "renovation",
        "description": "Poutre de soutènement ajustée et chevillée à main d'homme pour consolider le versant exposé.",
        "image": "./images/gallerie/karma 2.2.jpg",
        "date": "2026-05-16"
    },
    {
        "id": "r14",
        "title": "Reprise de charpente sous toiture",
        "category": "renovation",
        "description": "Intégration d'un poteau de soutien central et de contrefiches pour soulager une sablière fatiguée.",
        "image": "./images/renovation/reprise 1.jpg",
        "date": "2026-04-12"
    },
    {
        "id": "r15",
        "title": "Détail de la liaison de sablière",
        "category": "renovation",
        "description": "Reprise en sous-oeuvre avec assemblage à mi-bois bloqué par double chevelage.",
        "image": "./images/renovation/reprise 3.jpg",
        "date": "2026-04-14"
    },
    {
        "id": "r16",
        "title": "Liaisons sous fermette",
        "category": "renovation",
        "description": "Console de renfort structurel pour redistribuer les charges du toit vers les murs porteurs.",
        "image": "./images/gallerie/reprise2.jpg",
        "date": "2026-04-13"
    },
    {
        "id": "r17",
        "title": "Rénovation de toiture traditionnelle",
        "category": "renovation",
        "description": "Pose de chevrons et contre-lattes sur une structure restaurée, prête à accueillir la couverture en ardoises locales.",
        "image": "./images/renovation/toit 1.jpg",
        "date": "2026-03-25"
    },
    {
        "id": "a1",
        "title": "Cabane d'alpage d'altitude",
        "category": "atypique",
        "description": "Ouvrage réalisé en site isolé sans électricité. Piliers et charpente entière équarris sur place à la hache.",
        "image": "./images/atypique/DSCF6766.JPG",
        "date": "2026-06-12"
    },
    {
        "id": "a2",
        "title": "Estivage de montagne",
        "category": "atypique",
        "description": "Le refuge prend vie. Les bois d'épicéa du terrain s'assemblent pour résister aux hivers rigoureux de haute montagne.",
        "image": "./images/atypique/DSCF6804.JPG",
        "date": "2026-06-15"
    },
    {
        "id": "a3",
        "title": "Refuge en lisière de forêt",
        "category": "atypique",
        "description": "Intégration poétique du refuge dans le paysage. Une conception écologique à faible impact, respectant le rythme des saisons.",
        "image": "./images/atypique/DSCF6823.JPG",
        "date": "2026-06-20"
    }
];

// STATE MANAGEMENT
let localProjects = [];
let activeCategory = 'construction';
let currentImageIndex = 0;
let filteredGallery = [];
let isLocalOnly = false; // Flag to identify if backend is disconnected

// UI Elements
const siteHeader = document.getElementById('site-header');
const menuToggle = document.getElementById('menu-toggle');
const siteNav = document.getElementById('site-nav');
const pillarCards = document.querySelectorAll('.pillar-card');
const footerLinks = document.querySelectorAll('.footer-links a[data-pillar]');

// Modal Elements
const galleryModal = document.getElementById('gallery-modal');
const modalClose = document.getElementById('modal-close');
const modalImage = document.getElementById('modal-image');
const modalTitle = document.getElementById('modal-title');
const modalCatTag = document.getElementById('modal-cat-tag');
const modalDescription = document.getElementById('modal-description');
const metaTechnique = document.getElementById('meta-technique');
const metaMaterial = document.getElementById('meta-material');
const metaShaping = document.getElementById('meta-shaping');
const metaDate = document.getElementById('meta-date');
const modalAsideThumbs = document.getElementById('modal-aside-thumbs');
const modalTabBtns = document.querySelectorAll('.modal-tab-btn');
const galleryPrev = document.getElementById('gallery-prev');
const galleryNext = document.getElementById('gallery-next');

// 1. DATABASE & API LOADING WITH OFFLINE INDEXEDDB FALLBACK
async function initDatabase() {
    try {
        const res = await fetch('./data/projects.json');
        if (!res.ok) throw new Error('Failed to load JSON');
        let data = await res.ok ? await res.json() : [];

        if (data && data.items) {
            data = data.items;
        }

        // Fix absolute path mappings for local index.html view
        localProjects = data.map(proj => {
            if (proj.image && proj.image.startsWith('/')) {
                proj.image = '.' + proj.image;
            }
            return proj;
        });
        isLocalOnly = false;
        console.log("Base de données Batihache chargée statiquement via CMS");
    } catch (err) {
        console.warn("Échec de connexion API Express, chargement locale IndexedDB/Mock.");
        isLocalOnly = true;
        await loadLocalOfflineProjects();
    }
}

// Open and load offline projects from IndexedDB
function loadLocalOfflineProjects() {
    return new Promise((resolve) => {
        let request = indexedDB.open("BatihacheCMS", 1);

        request.onupgradeneeded = (e) => {
            let db = e.target.result;
            if (!db.objectStoreNames.contains("projects")) {
                db.createObjectStore("projects", { keyPath: "id" });
            }
        };

        request.onsuccess = (e) => {
            let db = e.target.result;
            let transaction = db.transaction("projects", "readonly");
            let store = transaction.objectStore("projects");
            let getRequest = store.getAll();

            getRequest.onsuccess = () => {
                const offlineProjects = getRequest.result || [];
                // Concat pre-seeded projects with user offline uploads
                localProjects = [...SEED_PROJECTS, ...offlineProjects];
                resolve();
            };

            getRequest.onerror = () => {
                localProjects = [...SEED_PROJECTS];
                resolve();
            };
        };

        request.onerror = () => {
            localProjects = [...SEED_PROJECTS];
            resolve();
        };
    });
}

// 2. SCROLL & HEADER ANIMATION
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        siteHeader.classList.add('scrolled');
    } else {
        siteHeader.classList.remove('scrolled');
    }
});

// 3. RESPONSIVE MENU INTERACTION
if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        siteNav.style.display = siteNav.style.display === 'flex' ? 'none' : 'flex';
        if (siteNav.style.display === 'flex') {
            siteNav.style.flexDirection = 'column';
            siteNav.style.position = 'absolute';
            siteNav.style.top = '70px';
            siteNav.style.left = '0';
            siteNav.style.width = '100%';
            siteNav.style.background = 'var(--bg-parchment)';
            siteNav.style.padding = '2rem';
            siteNav.style.boxShadow = '0 10px 30px rgba(0,0,0,0.05)';
            siteNav.style.borderBottom = '1px solid var(--border-plane)';
        } else {
            siteNav.style.position = '';
            siteNav.style.top = '';
            siteNav.style.left = '';
            siteNav.style.width = '';
            siteNav.style.background = '';
            siteNav.style.padding = '';
            siteNav.style.boxShadow = '';
            siteNav.style.borderBottom = '';
        }
    });
}

window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        siteNav.removeAttribute('style');
        if (menuToggle) menuToggle.classList.remove('active');
    }
});

// Close mobile nav when clicking a link
siteNav.addEventListener('click', (e) => {
    if (e.target.classList.contains('nav-item') || e.target.classList.contains('cta-button')) {
        if (window.innerWidth <= 768) {
            siteNav.style.display = 'none';
            if (menuToggle) menuToggle.classList.remove('active');
        }
    }
});

// 4. IMMERSIVE GALLERY CONTROLS
function openGallery(category) {
    activeCategory = category;

    // Update active tab highlight in Modal
    modalTabBtns.forEach(btn => {
        if (btn.dataset.tab === category) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });

    // Filter project lists
    filteredGallery = localProjects.filter(p => p.category === category);

    if (filteredGallery.length > 0) {
        currentImageIndex = 0;
        renderCurrentImage();
        renderAsideThumbnails();

        galleryModal.classList.add('active');
        document.body.style.overflow = 'hidden'; // block main body scroll
    } else {
        alert("Aucune photo dans cette galerie pour le moment.");
    }
}

function renderCurrentImage() {
    if (filteredGallery.length === 0) return;
    const project = filteredGallery[currentImageIndex];

    // Transition zoom off
    modalImage.classList.remove('zoomed');
    modalImage.style.opacity = 0;

    setTimeout(() => {
        modalImage.src = project.image;
        modalImage.alt = project.title;
        modalTitle.textContent = project.title;
        modalCatTag.textContent = project.category.toUpperCase();
        modalDescription.textContent = project.description;

        // Inject realistic technical details in metadata panel
        metaDate.textContent = project.date.split('-')[0] || "2026";

        if (project.category === 'construction') {
            metaTechnique.textContent = "Assemblage traditionnel";
            metaMaterial.textContent = "Chêne de pays";
            metaShaping.textContent = "Hache d'équarrissage";
        } else if (project.category === 'renovation') {
            metaTechnique.textContent = "Restauration / Greffe";
            metaMaterial.textContent = "Vieux Chêne / Mélèze";
            metaShaping.textContent = "Doloire & Herminette";
        } else {
            metaTechnique.textContent = "Vernaculaire / Sauvage";
            metaMaterial.textContent = "Épicéa sur pied / Pin";
            metaShaping.textContent = "Taille manuelle direct";
        }

        modalImage.style.opacity = 1;

        // Highlight correct thumbnail in aside panel
        const thumbnails = document.querySelectorAll('.aside-gallery-item');
        thumbnails.forEach((thumb, idx) => {
            if (idx === currentImageIndex) {
                thumb.classList.add('active');
                thumb.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
            } else {
                thumb.classList.remove('active');
            }
        });

    }, 150);
}

function renderAsideThumbnails() {
    modalAsideThumbs.innerHTML = '';
    filteredGallery.forEach((project, index) => {
        const thumbItem = document.createElement('div');
        thumbItem.classList.add('aside-gallery-item');
        if (index === currentImageIndex) thumbItem.classList.add('active');

        const img = document.createElement('img');
        img.src = project.image;
        img.alt = `Miniature de ${project.title}`;

        thumbItem.appendChild(img);
        thumbItem.addEventListener('click', () => {
            currentImageIndex = index;
            renderCurrentImage();
        });

        modalAsideThumbs.appendChild(thumbItem);
    });
}

function closeGallery() {
    galleryModal.classList.remove('active');
    modalImage.classList.remove('zoomed');
    document.body.style.overflow = '';
}

// Next / Previous
function showNextImage() {
    if (filteredGallery.length <= 1) return;
    currentImageIndex = (currentImageIndex + 1) % filteredGallery.length;
    renderCurrentImage();
}

function showPrevImage() {
    if (filteredGallery.length <= 1) return;
    currentImageIndex = (currentImageIndex - 1 + filteredGallery.length) % filteredGallery.length;
    renderCurrentImage();
}

// Event Listeners for Modal
pillarCards.forEach(card => {
    card.addEventListener('click', () => {
        const cat = card.dataset.category;
        openGallery(cat);
    });
});

footerLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const cat = link.dataset.pillar;
        openGallery(cat);
    });
});

modalClose.addEventListener('click', closeGallery);

// Close on background click
galleryModal.addEventListener('click', (e) => {
    if (e.target === galleryModal || e.target.classList.contains('modal-container')) {
        closeGallery();
    }
});

// Modal Category tabs
modalTabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const tabCat = btn.dataset.tab;
        activeCategory = tabCat;

        modalTabBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        filteredGallery = localProjects.filter(p => p.category === tabCat);
        currentImageIndex = 0;

        if (filteredGallery.length > 0) {
            renderCurrentImage();
            renderAsideThumbnails();
        } else {
            modalImage.src = "";
            modalTitle.textContent = "Aucun projet";
            modalDescription.textContent = "Cette section n'a pas encore d'images. Vous pouvez en ajouter depuis l'espace d'administration.";
            modalAsideThumbs.innerHTML = '';
        }
    });
});

// Image double/single click zoom
modalImage.addEventListener('click', () => {
    modalImage.classList.toggle('zoomed');
});

galleryNext.addEventListener('click', showNextImage);
galleryPrev.addEventListener('click', showPrevImage);

// Keyboard controls
document.addEventListener('keydown', (e) => {
    if (!galleryModal.classList.contains('active')) return;
    if (e.key === 'Escape') closeGallery();
    if (e.key === 'ArrowRight') showNextImage();
    if (e.key === 'ArrowLeft') showPrevImage();
});

// 5. CONTACT FORM SUBMISSION
// Formulaire de contact remplacé par l'intégration iframe Tally.
// (La logique a été retirée car Tally gère l'envoi en interne).

// 6. INITIAL RUN
window.addEventListener('DOMContentLoaded', async () => {
    await initDatabase();
    loadCoverImages(); // Apply custom cover images if server is available
    loadCMSContent(); // Apply dynamic CMS custom texts
    initKenBurnsSlideshow(); // Start hero Ken Burns slideshow

    // ─── ADMIN ACCESS MODAL ───
    const adminModal = document.getElementById('admin-modal');
    const adminCodeInput = document.getElementById('admin-code-input');
    const adminModalForm = document.getElementById('admin-modal-form');
    const adminModalError = document.getElementById('admin-modal-error');
    const adminModalCancel = document.getElementById('admin-modal-cancel');
    const adminModalBox = adminModal ? adminModal.querySelector('.admin-modal-box') : null;

    function openAdminModal() {
        if (!adminModal) return;
        adminCodeInput.value = '';
        adminModalError.classList.remove('visible');
        adminModal.classList.add('active');
        document.body.style.overflow = 'hidden';
        setTimeout(() => adminCodeInput.focus(), 100);
    }

    function closeAdminModal() {
        if (!adminModal) return;
        adminModal.classList.remove('active');
        document.body.style.overflow = '';
    }

    function submitAdminCode() {
        const code = adminCodeInput.value;
        if (code === 'Matthis') {
            closeAdminModal();
            window.location.href = './admin/';
        } else {
            adminModalError.classList.add('visible');
            adminModalBox.classList.add('shake');
            adminCodeInput.value = '';
            adminCodeInput.focus();
            setTimeout(() => adminModalBox.classList.remove('shake'), 500);
        }
    }

    // Admin button in nav opens modal
    const adminTrigger = document.getElementById('admin-trigger');
    if (adminTrigger) {
        adminTrigger.addEventListener('click', (e) => {
            e.preventDefault();
            openAdminModal();
        });
    }

    // Footer double-click also opens modal
    const footerBar = document.getElementById('footer-bottom-bar');
    if (footerBar) {
        footerBar.addEventListener('dblclick', () => {
            openAdminModal();
        });
    }

    // Modal form submit
    if (adminModalForm) {
        adminModalForm.addEventListener('submit', (e) => {
            e.preventDefault();
            submitAdminCode();
        });
    }

    // Modal cancel
    if (adminModalCancel) {
        adminModalCancel.addEventListener('click', closeAdminModal);
    }

    // Close modal on overlay click
    if (adminModal) {
        adminModal.addEventListener('click', (e) => {
            if (e.target === adminModal) closeAdminModal();
        });
    }

    // Close modal on Escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && adminModal && adminModal.classList.contains('active')) {
            closeAdminModal();
        }
    });
});

// 7. COVER IMAGES - Load dynamic covers from settings API
async function loadCoverImages() {
    try {
        const res = await fetch('./data/settings.json');
        if (!res.ok) return;
        const settings = await res.json();

        if (settings.coverImages) {
            for (const [cat, imgPath] of Object.entries(settings.coverImages)) {
                const el = document.getElementById(`cover-${cat}`);
                if (el && imgPath) el.src = imgPath;
            }
        }

        if (settings.pillarTitles) {
            for (const [cat, titleText] of Object.entries(settings.pillarTitles)) {
                const card = document.querySelector(`.pillar-card[data-category="${cat}"]`);
                if (card) {
                    const titleEl = card.querySelector('.pillar-card-title');
                    if (titleEl && titleText) titleEl.textContent = titleText;
                }
                const tabBtn = document.querySelector(`.modal-tab-btn[data-tab="${cat}"]`);
                if (tabBtn && titleText) tabBtn.textContent = titleText;
            }
        }

        if (settings.pillarDesc) {
            for (const [cat, descText] of Object.entries(settings.pillarDesc)) {
                const card = document.querySelector(`.pillar-card[data-category="${cat}"]`);
                if (card) {
                    const descEl = card.querySelector('.pillar-card-desc');
                    if (descEl && descText) descEl.textContent = descText;
                }
            }
        }
    } catch {
        // No server or no settings: default images stay
    }
}

// 8. CMS CONTENT - Load custom texts and configurations
async function loadCMSContent() {
    try {
        const res = await fetch('./data/content.json');
        if (!res.ok) return;
        const content = await res.json();
        for (const [id, data] of Object.entries(content)) {
            const el = document.querySelector(`[data-content-id="${id}"]`);
            if (el) {
                if (data.text) el.textContent = data.text;
                if (data.fontFamily) el.style.fontFamily = data.fontFamily;
                if (data.fontSize) el.style.fontSize = data.fontSize;
                if (data.fontWeight) el.style.fontWeight = data.fontWeight;
                if (data.fontStyle) el.style.fontStyle = data.fontStyle;
                if (data.textAlign) el.style.textAlign = data.textAlign;
                if (data.textTransform && data.textTransform !== 'none') el.style.textTransform = data.textTransform;
                if (data.letterSpacing && data.letterSpacing !== '0em') el.style.letterSpacing = data.letterSpacing;
                if (data.transform) el.style.transform = data.transform;
            }
        }
    } catch {
        // Fall back to static HTML values gracefully if no config found
    }
}

// 9. KEN BURNS HERO SLIDESHOW
function initKenBurnsSlideshow() {
    const slides = document.querySelectorAll('.hero-slide');
    if (slides.length <= 1) return;

    const kbEffects = ['kb-zoom-in', 'kb-zoom-out', 'kb-pan-left', 'kb-pan-right', 'kb-pan-up', 'kb-diagonal'];
    let currentSlide = 0;
    let lastEffect = '';

    function getRandomEffect() {
        let effect;
        do {
            effect = kbEffects[Math.floor(Math.random() * kbEffects.length)];
        } while (effect === lastEffect);
        lastEffect = effect;
        return effect;
    }

    function clearKBClasses(slide) {
        kbEffects.forEach(cls => slide.classList.remove(cls));
    }

    // Start the first slide with an animation
    clearKBClasses(slides[0]);
    slides[0].classList.add(getRandomEffect());

    setInterval(() => {
        const prevSlide = currentSlide;
        currentSlide = (currentSlide + 1) % slides.length;

        // Prepare the incoming slide: reset its animation, assign a new effect
        clearKBClasses(slides[currentSlide]);
        // Force reflow so animation restarts cleanly
        void slides[currentSlide].offsetWidth;
        slides[currentSlide].classList.add(getRandomEffect());

        // Crossfade: activate new, deactivate old
        slides[currentSlide].classList.add('active');
        slides[prevSlide].classList.remove('active');

        // After the old slide fully fades out (2s transition), reset its animation
        setTimeout(() => {
            clearKBClasses(slides[prevSlide]);
        }, 2200);
    }, 8000); // Change every 8 seconds
}
