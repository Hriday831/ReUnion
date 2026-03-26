const friends = [
    {
        name : "Hriday Kundu",
        image : "hriday kundu.jpeg",
        batch : "2022",
        dob: "07/01",
        facebook : "https://www.facebook.com/hridoy.kundu.127",
        instagram : "https://www.instagram.com/hriday_kundu5?igsh=OTRpMWRxZXFsb2Q0",
        thread : "#",
        linkedin : "https://www.linkedin.com/in/hriday-kundu-5646b2379/"
    },
    {
        name : "Anima Barai",
        image : "anima barai.jpeg",
        batch : "2022",
        dob: "18/04",
        facebook : "https://www.facebook.com/profile.php?id=61550797195140",
        instagram : "#",
        thread : "#",
        linkedin : "#"
    },
    {
        name : "Annapurna Sarkar",
        image : "annapurna Sarkar.jpg",
        batch : "2022",
        dob: "12/02",
        facebook : "https://www.facebook.com/profile.php?id=61558218665816",
        instagram : "https://www.instagram.com/its____cutegirl____anu1902?igsh=OXhwbzhtcXVxcGFi",
        thread : "#",
        linkedin : "#"
    },
    {
        name : "Purnima Biswas ",
        image : "Purnima Biswas.jpg",
        batch : "2021",
        dob: "17/10",
        facebook : "https://www.facebook.com/share/1NeAudtnCt/",
        instagram : "https://www.instagram.com/_she_observes?igsh=MTVoZmlxcnd1ZHRmMw==",
        thread : "#",
        linkedin : "#"
    },
    {
        name : "Subha Barman ",
        image : "Subha Barman.jpg",
        batch : "2022",
        dob: "25/11",
        facebook : "https://www.facebook.com/share/1CHVes3A36/",
        instagram : "https://www.instagram.com/toxic_itachi__?igsh=MXJiOTU5bzljM2FzMg==",
        thread : "#",
        linkedin : "#"
    },
    {
        name : "Apurba Roy",
        image : "Apurba Roy.jpg",
        batch : "2022",
        dob: "03/10",
        facebook : "https://www.facebook.com/share/18aR648Rhg/",
        instagram : "https://www.instagram.com/apur.ba552?igsh=YTJjcDdpbHN4dGUz",
        thread : "#",
        linkedin : "#"
    },
    {
        name : "Sneha Goswami",
        image : "Sneha Gouswami.jpeg",
        batch : "2021",
        dob: "20/05",
        facebook : "https://www.facebook.com/share/17EfXh7su1/",
        instagram : "https://www.instagram.com/_sneha_goswami_36?igsh=cDdlbjd1bXR1dnQ1",
        thread : "https://www.threads.com/@_sneha_goswami_36",
        linkedin : "#"
    },
    {
        name : "Arpita Das",
        image : "Arpita Das.jpg",
        batch : "2022",
        dob: "21/03",
        facebook : "https://www.facebook.com/share/17JNqNC1Lm/",
        instagram : "https://www.instagram.com/theabstractsoull?utm_source=qr&igsh=bmkwcjNvNnlwZDVt",
        thread : "#",
        linkedin : "#"
    },
    {
        name : "Bibek paul",
        image : "Bibek Paul.jpg",
        batch : "2022",
        dob: "21/02",
        facebook : "#",
        instagram : "#",
        thread : "#",
        linkedin : "#"
    },
    {
        name : "demo name",
        image : "demo.jpg",
        batch : "2023",
        dob: "01/01",
        facebook : "#",
        instagram : "#",
        thread : "#",
        linkedin : "#"
    }
];

// Gallery Images Data
const galleryImages = [
    "https://lh3.googleusercontent.com/gps-cs-s/AHVAwerMyrknZsDN-2ZC0L-ItwS1bX3DDkwXSUu0ZeXMdrEKWZQutJbDIqyy7lbagtAYkUUWT9VUJKcCx6P0vG-g3Vf6NVTDQ_cC5RXxBAh7_xRY3uakk7MdirDR9yiClAPT6MXSQOz6Gg=s1360-w1360-h1020-rw",
    "https://lh3.googleusercontent.com/gps-cs-s/AHVAweoSBFwLEbnLI4gWJ2bfIKHh35RpiF6G2DJtEo8oR_Wwtf4ne_iYoXIX5wbUeWuxqwwgr5zXeSfPQFbzkgroeSXdcDgEllMefhq1b9GDeFlC__STVJ-9lz4dtj0_YfY69XoZWOi-dQ=s1360-w1360-h1020-rw",
    "https://lh3.googleusercontent.com/gps-cs-s/AHVAweqLnIvtUlu3DhIr28pzShR4NappYYtzG9DirV41vcIxSuq1X5FVBaE3Z7NJstCjvJD3g3SwnJGCV9sflebbM19NsOcjnyGib2rEuWBM8xY0N5gOYeBeCz6f8xrU-GcaLbdhrgi1Ng=s1360-w1360-h1020-rw",
    "https://lh3.googleusercontent.com/gps-cs-s/AHVAweoQhjzSQoy05_cY2y_R0t4W_sCFhEvU1t6UUxAfmali6n1ZIO3hUOFQ9zlRUBqXVsIQzvYk1O9k3qi5S8U6XaDMasS72AhlXTkwr-dAYkuQJ6vuJVlEuFB1wyFI5RUJERdEvxd3iA=s1360-w1360-h1020-rw",
    "https://content.jdmagicbox.com/comp/siliguri/m9/9999px353.x353.190402041029.i5m9/catalogue/suryanagar-master-preet-nath-memorial-madhyamik-vidyalaya-rabindra-sarani-siliguri-bengali-medium-schools-ftd8jj5bxd.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuyl-zUzzvADMu3931O1nbKQIC74vHRr9XSA&s"
];

//store of wishes
const wishes = [
        "Wishing you a day filled with joy, laughter, and everything that makes you happiest! May this new year bring amazing adventures and success. 🎂🎈",
        "May your day be as awesome as you are! Wishing you the very best on your birthday and a year ahead full of happiness and success. 🎉",
        "Happy Birthday! Here's to another year of growth, opportunity, and making incredible memories. Enjoy your special day! 🌟",
        "Sending you the biggest birthday wishes! Hope you get spoiled rotten and have the most fantastic day celebrating all that you are. 🥳",
        "A huge Happy Birthday! May you achieve all your dreams this coming year. Cheers to you! 🥂"
    ];

// Select a random wish from the array and store it in randomWish
const randomIndex = Math.floor(Math.random() * wishes.length);
const randomWish = wishes[randomIndex];



// function to create card
function createCard(person) { 
    return `<article class="team__member">
                <div class="team__member__image">
                    <img src="./asset/${person.image}" alt="${person.name}">
                </div>
                <div class="team__member__info">
                    <h4>${person.name}</h4>
                </div>
                <div class="team__member__socials">
                    <a href="${person.facebook}" target="_blank" aria-label="Facebook"><i class="uil uil-facebook-f"></i></a>
                    <a href="${person.instagram}" target="_blank" aria-label="Instagram"><i class="uil uil-instagram"></i></a>
                    <a href="${person.thread}" target="_blank" aria-label="Threads"><i class="uil uil-at"></i></a>
                    <a href="${person.linkedin}" target="_blank" aria-label="LinkedIn"><i class="uil uil-linkedin-alt"></i></a>
                </div>
            </article>`;
}

// Global variables for search elements
const searchInput = document.getElementById('search-input');
let memberCards = []; 

// Function to handle filtering
function filterMembers() {
    if (memberCards.length === 0) {
        memberCards = document.querySelectorAll('.team__member');
    }
    
    const query = searchInput.value.toLowerCase();
    
    memberCards.forEach(card => {
        const cardText = card.textContent.toLowerCase(); 
        
        if (cardText.includes(query)) {
            card.style.display = "";
        } else {
            card.style.display = "none";
        }
    });
}

// --- Event Listeners and Initial Setup ---

document.addEventListener("DOMContentLoaded", function(){
    const team_section = document.getElementById("all-students");
    const nav_links_container = document.querySelector('.nav__links');
    const gallery_container = document.getElementById("gallery-container");
    let sectionHTML = "";
    let navHTML = "";

    // 1. Get unique batches and sort them
    const batches = [...new Set(friends.map(friend => friend.batch))].sort();
    
    // 2. Generate HTML for each batch
    batches.forEach((batch, index) => {
        // Add ID for navigation and scroll margin
        sectionHTML += `
            <div id="batch-${batch}" class="sec-txt" style="scroll-margin-top: 6rem; margin-top: ${index === 0 ? '0' : '5'}rem;">
                <h2>Batch ${batch}</h2>
            </div>
            <div class="container team__container">
        `;
        // Filter friends by batch and add their cards
        friends.filter(person => person.batch === batch).forEach(person => {
            sectionHTML += createCard(person);
        });
        sectionHTML += `</div>`; // Close container

        // Generate Nav Link for this batch
        navHTML += `<li><a href="#batch-${batch}">Batch ${batch}</a></li>`;
    });

    // Add Gallery Link and Add Me Link to Nav
    navHTML += `<li><a href="#gallery">Gallery</a></li>`;
    navHTML += `<li><a href="#" id="birthday-nav-btn">Birthdays</a></li>`;
    navHTML += `<li><a href="https://docs.google.com/forms/d/e/1FAIpQLScJirHkRRINxOT3A4lId-DBTypd6dza-gZFA7V6ZHAJYYyIMA/viewform?usp=dialog" target="_blank">Add Me</a></li>`;
    
    // 3. Inject into the DOM
    if(team_section) {
        team_section.innerHTML = sectionHTML;
        
        // Populate the memberCards array AFTER they are in the DOM
        memberCards = document.querySelectorAll('.team__member');
    }

    // 4. Inject Navigation Links
    if(nav_links_container) {
        nav_links_container.innerHTML = navHTML;
    }
    
    const birthdayNavBtn = document.getElementById('birthday-nav-btn');
    if(birthdayNavBtn) {
        birthdayNavBtn.addEventListener('click', openBirthdayCountdown);
    }

    // 5. Inject Gallery Images
    if(gallery_container) {
        gallery_container.innerHTML = galleryImages.map(imgSrc => `
            <div class="gallery-item">
                <img src="${imgSrc}" alt="Gallery Image">
            </div>
        `).join('');
    }

    if (searchInput) {
        searchInput.addEventListener('input', filterMembers);
    }
});

// start manu button toggle code
const menuBtn = document.getElementById('menu-btn');
const menuNav = document.getElementById('menu-nav');

const toggleMenu = () => {
    menuNav.classList.toggle('show-menu');
    
    const icon = menuBtn.querySelector('i');
    if (menuNav.classList.contains('show-menu')) {
        icon.classList.remove('uil-bars');
        icon.classList.add('uil-times');
        menuNav.style.display='block';
    } else {
        icon.classList.remove('uil-times');
        icon.classList.add('uil-bars');
        menuNav.style.display='none';
    }
};

if (menuBtn) {
    menuBtn.addEventListener('click', toggleMenu);
}

if (menuNav) {
    // Use event delegation for dynamically added links
    menuNav.addEventListener('click', (e) => {
        if (e.target.tagName === 'A') {
            if (window.innerWidth < 1024) { 
                toggleMenu();
            }
        }
    });
}
// End of manu button toggle code

// start search icon toggle code 
document.addEventListener('DOMContentLoaded', function() {
    const searchIcon = document.getElementById('search-icon');
    const searchContainer = document.querySelector('.search-container');
    
    if (searchIcon && searchContainer && searchInput) {
        searchIcon.addEventListener('click', function() {
            searchContainer.classList.toggle('expanded');
    
            if (searchContainer.classList.contains('expanded')) {
                searchInput.focus();
            } else {
                searchInput.blur();
            }
        });
    
        document.addEventListener('click', function(event) {
            if (!searchContainer.contains(event.target) && searchContainer.classList.contains('expanded')) {
                searchContainer.classList.remove('expanded');
            }
        });
    }
});
// end search icon toggle code

document.addEventListener('DOMContentLoaded', function() {

    const btw_container = document.getElementById('btwcardContainer');
    const btw_close_btn = document.getElementById('btw-close-button');
    const birthday_boy_girl_name = document.getElementById('btw-person-name');
    const birthday_wish = document.getElementById('birthday-wish');

    // Close button logic
    if (btw_close_btn) {
        btw_close_btn.addEventListener('click', function() {
            if (btw_container) {
                btw_container.classList.add('btw-card-closed');
                setTimeout(() => {
                    btw_container.style.display = "none";
                    btw_container.classList.remove('btw-card-closed');
                }, 500); 
            }
        });
    }

    // Date calculation (DD/MM format)
    const today = new Date();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    const today_dob_format = `${day}/${month}`; 

    let birthday_boy_girl = [];

    // check is anyone's birthday match with current date
    if (typeof friends !== 'undefined' && Array.isArray(friends)) {
        for (const friend of friends) {
            if (friend.dob === today_dob_format) {
                birthday_boy_girl.push(friend);
            }
        }
    }
    
    // Check for birthdays and update UI
    if (birthday_boy_girl.length !== 0 && btw_container && birthday_boy_girl_name) {
        // 1. Extract only the names from the friend objects
        const namesArray = birthday_boy_girl.map(friend => friend.name);

        // 2. Format the names for display (e.g., "A, B, and C")
        let namesText;
        if (namesArray.length === 1) {
            namesText = namesArray[0];
        } else if (namesArray.length === 2) {
            namesText = namesArray.join(' and ');
        } else {
            const last = namesArray.pop();
            namesText = namesArray.join(', ') + `, and ${last}`;
        }
        
        // 3. Set the text and make the container visible (once)
        birthday_boy_girl_name.innerText = `${namesText}`;
        birthday_wish.innerText = `${randomWish}`;
        btw_container.style.display = "flex";

        // 4. Trigger confetti if the library is loaded
        if (typeof confetti === 'function') {
            confetti({
                particleCount: 150,
                spread: 90,
                origin: { y: 0.6 }
            });
        }

    } else if (btw_container) {
        // No birthdays today
        btw_container.style.display = "none";
    }
});

// --- Birthday Countdown Logic ---
const countdownModal = document.getElementById('countdown-modal');
const countdownCloseBtn = document.getElementById('countdown-close-btn');
const countdownContent = document.getElementById('countdown-content');
let countdownInterval;

if (countdownCloseBtn) {
    countdownCloseBtn.addEventListener('click', () => {
        if (countdownModal) {
            countdownModal.style.display = 'none';
            if (countdownInterval) clearInterval(countdownInterval);
        }
    });
}

function openBirthdayCountdown(e) {
    e.preventDefault();
    if (!countdownModal || !countdownContent) return;
    
    // Calculate next birthday
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Normalize today to midnight
    const currentYear = today.getFullYear();
    
    // Map friends to include their next birthday date
    const sortedFriends = friends.map(friend => {
        const [d, m] = friend.dob.split('/');
        let bday = new Date(currentYear, parseInt(m) - 1, parseInt(d));
        
        if (bday < today) {
            bday.setFullYear(currentYear + 1);
        }
        return { ...friend, nextDate: bday };
    }).sort((a, b) => a.nextDate - b.nextDate);
    
    const nextBirthdayFriend = sortedFriends[0];
    const upcomingList = sortedFriends.slice(0, 6); // Get next 6 birthdays
    
    if (nextBirthdayFriend) {
        countdownModal.style.display = 'flex';
        
        updateTimer(nextBirthdayFriend, upcomingList);
        if (countdownInterval) clearInterval(countdownInterval);
        countdownInterval = setInterval(() => updateTimer(nextBirthdayFriend, upcomingList), 1000);
    }
}

function updateTimer(friend, upcomingList = []) {
    const now = new Date();
    const diff = friend.nextDate - now;
    
    // Generate Dynamic Upcoming List HTML
    let listHTML = '<div class="upcoming-birthdays">';
    upcomingList.forEach((f, index) => {
        const fDiff = f.nextDate - now;
        let timeStr = "Happy Birthday!";
        
        if (fDiff > 0) {
            const d = Math.floor(fDiff / (1000 * 60 * 60 * 24));
            const h = Math.floor((fDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const m = Math.floor((fDiff % (1000 * 60 * 60)) / (1000 * 60));
            const s = Math.floor((fDiff % (1000 * 60)) / 1000);
            timeStr = `${d}d ${h}h ${m}m ${s}s`;
        }
        
        const dateStr = f.nextDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
        
        listHTML += `
            <div class="upcoming-item">
                <span style="font-weight: bold; color: #fff; width: 20px;">${index + 1}</span>
                <div class="upcoming-details">
                    <span class="upcoming-name">${f.name}</span>
                    <span class="upcoming-date">${dateStr}</span>
                </div>
                <span class="upcoming-countdown">${timeStr}</span>
            </div>
        `;
    });
    listHTML += '</div>';

    if (diff <= 0) {
        countdownContent.innerHTML = `<h3>Happy Birthday ${friend.name}! 🎉</h3>` + listHTML;
        if (countdownInterval) clearInterval(countdownInterval);
        return;
    }
    
    countdownContent.innerHTML = listHTML;
}

// --- 3D Model Scrolling Animation (Three.js + GSAP) ---
document.addEventListener('DOMContentLoaded', function() {
    // Ensure libraries are loaded
    if (typeof THREE === 'undefined' || typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') {
        console.warn('Three.js or GSAP not loaded.');
        return;
    }

    // 1. Setup Scene
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.domElement.style.position = 'fixed';
    renderer.domElement.style.top = '0';
    renderer.domElement.style.left = '0';
    renderer.domElement.style.zIndex = '1'; // In front of content
    renderer.domElement.style.pointerEvents = 'none'; // Allow clicks to pass through
    document.body.prepend(renderer.domElement);

    // 2. Add Lighting (Required for 3D Models)
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.5);
    scene.add(ambientLight);
    
    const directionalLight = new THREE.DirectionalLight(0xffffff, 2);
    directionalLight.position.set(5, 10, 7);
    scene.add(directionalLight);

    // 3. Load 3D Model (Student)
    let model;
    const loader = new THREE.GLTFLoader();


    camera.position.z = 5;
    gsap.registerPlugin(ScrollTrigger);

    // 4. Animation Loop
    function animate() {
        requestAnimationFrame(animate);
        if (model) {
            model.rotation.y += 0.005; // Constant slow rotation
        }
        renderer.render(scene, camera);
    }
    animate();
    window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });
});
