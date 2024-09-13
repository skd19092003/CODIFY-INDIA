document.addEventListener('DOMContentLoaded', function() {
    const readMoreBtn = document.getElementById('read-more-btn');
    const introContent = document.getElementById('intro-content');
    const startLearningBtn = document.getElementById('start-learning-btn');
    const basicsSection = document.getElementById('basics');
    const nextToTopicsBtn = document.getElementById('next-to-topics-btn');
    const topicsSection = document.getElementById('topics');
    const studyMethodSection = document.getElementById('study-method');
    const notesMethodSection = document.getElementById('notes-method');
    const notesContent = document.getElementById('notes-content');
    const viewNotesBtn = document.getElementById('view-notes-btn');
    const iframeContainer = document.querySelector('.iframe-container');
    const notesIframe = document.getElementById('lectures-iframe'); // Ensure this ID matches your HTML
    const ratingCommentSection = document.querySelector('.rating-comment-section');
    const reviewForm = document.getElementById('review-form');
    const starRating = document.querySelector('.star-rating');
    const ratingInput = document.getElementById('rating');
    const reviewsContainer = document.getElementById('reviews-container');
    const goBackButtons = document.querySelectorAll('.go-back-btn');
    
    // Lecture Section Elements
    const lectureSection = document.getElementById('lecture-section');
    const selectLanguageSection = document.getElementById('select-language');
    const englishChannelsSection = document.getElementById('english-channels');
    const hindiChannelsSection = document.getElementById('hindi-channels');
    const viewLectureBtn = document.getElementById('view-lecture-btn');

    let selectedTutor = '';
    let selectedTopic = '';
    let selectedLanguage = '';

    const notesData = {
        'cwh': {
            'html': 'https://cwh-full-next-space.fra1.cdn.digitaloceanspaces.com/notes/HTML_Complete_Notes.pdf',
            'css': 'https://cwh-full-next-space.fra1.cdn.digitaloceanspaces.com/notes/CSS_Complete_Notes.pdf',
            'javascript': 'https://cwh-full-next-space.fra1.cdn.digitaloceanspaces.com/notes/JS_Chapterwise_Notes.pdf'
        },
        'apna': {
            'html': '../ASSETS/HTML Notes.pdf',
            'css': '../ASSETS/CSS Notes.pdf',
            'javascript': 'https://api.thapatechnical.shop/uploads/images/1708140666413-best_jscourse_p1.pdf'
        },
        'pw-skills': {
            'html': '../ASSETS/pwskillshtml.pdf',
            'css': 'https://api.thapatechnical.shop/uploads/images/1700565110115-Complete%20CSS%20Course%20Notes.pdf',
            'javascript': 'https://api.thapatechnical.shop/uploads/images/1708140666413-best_jscourse_p1.pdf'
        },
        'documentation': {
            'html': 'https://www.codewithharry.com/tutorial/html-home/',
            'css': 'https://www.codewithharry.com/tutorial/css-home/',
            'javascript': 'https://www.codewithharry.com/tutorial/js/'
        }
    };

    const videoData = {
        'hindi': {
            'chai-aur-code': {
                'html': 'https://www.youtube.com/embed/watch?v=XmLOwJHFHf0&list=PLu71SKxNbfoDBNF5s-WH6aLbthSEIMhMI',
                'css': 'https://www.youtube.com/embed/watch?v=hD3blgVYMtQ&list=PLRAV69dS1uWQMe-An4FwXoPAV7JLXBXmd',
                'javascript': 'https://www.youtube.com/embed/watch?v=Hr5iLG7sUa0&list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37'
            },
            'code-with-harry': {
                'html': 'https://www.youtube.com/embed/watch?v=tVzUXW6siu0&list=PLu0W_9lII9agq5TrH9XLIKQvv0iaF2X3w',
                'css': 'https://www.youtube.com/embed/watch?v=1dkfuga2_Ps&list=PLu0W_9lII9agq5TrH9XLIKQvv0iaF2X3w&index=14',
                'javascript': 'https://www.youtube.com/embed/watch?v=NrhP53Divco&list=PLu0W_9lII9agq5TrH9XLIKQvv0iaF2X3w&index=54'
            },
            'apna-college': {
                'html': 'https://www.youtube.com/embed/watch?v=HcOc7P5BMi4&t=6450s',
                'css': 'https://www.youtube.com/embed/watch?v=ESnrn1kAD4E&t=11144s',
                'javascript': 'https://www.youtube.com/embed/watch?v=ajdRvxDWH4w&list=PLGjplNEQ1it_oTvuLRNqXfz_v_0pq6unW'
            },
            'pw-skills': {
                'html': 'https://www.youtube.com/embed/watch?v=1UpiimyRx_E&list=PLxgZQoSe9cg15a9KNSHBt0A_nkevQk8mG&index=2',
                'css': 'https://www.youtube.com/embed/watch?v=jsxwx1UquUM&list=PLxgZQoSe9cg15a9KNSHBt0A_nkevQk8mG&index=4',
                'javascript': 'https://www.youtube.com/embed/watch?v=LeHdBkdolBg&list=PLxgZQoSe9cg1B3TiBz05FMwfdwCkkpy2c'
            }
        },
        'english': {
            'freecodecamp': {
                'html': 'https://www.youtube.com/embed/watch?v=kUMe1FH4CHE&list=PLWKjhJtqVAbnSe1qUNMG7AbPmjIG54u88',
                'css': 'https://www.youtube.com/embed/watch?v=1Rs2ND1ryYc&list=PLWKjhJtqVAbnSe1qUNMG7AbPmjIG54u88&index=3',
                'javascript': 'https://www.youtube.com/embed/watch?v=PkZNo7MFNFg&list=PLWKjhJtqVAbleDe3_ZA8h3AO2rXar-q2V'
            },
            'brocode': {
                'html': 'https://www.youtube.com/embed/watch?v=-CNdRywgF7M&list=PLZPZq0r_RZOPoNttk9beDhO_Bu5DA-xwP',
                'css': 'https://www.youtube.com/embed/watch?v=xv-bBxaa7WU&list=PLZPZq0r_RZOONc3kkuRmBOlj67YAG6jqo',
                'javascript': 'https://www.youtube.com/embed/watch?v=Ihy0QziLDf0&list=PLZPZq0r_RZOO1zkgO4bIdfuLpizCeHYKv'
            }
        }
    };

    // Toggle Intro Content
    readMoreBtn.addEventListener('click', function() {
        if (introContent.classList.contains('expanded')) {
            introContent.classList.remove('expanded');
            readMoreBtn.textContent = 'Read About us';
        } else {
            introContent.classList.add('expanded');
            readMoreBtn.textContent = 'Read Less';
        }
    });

    // Start Learning Button Click
    startLearningBtn.addEventListener('click', function() {
        startLearningBtn.classList.add('hidden');
        basicsSection.classList.remove('hidden');
        basicsSection.querySelector('.go-back-btn').classList.remove('hidden');
    });

    // Next to Topics Button Click
    nextToTopicsBtn.addEventListener('click', function() {
        basicsSection.classList.add('hidden');
        topicsSection.classList.remove('hidden');
        topicsSection.querySelector('.go-back-btn').classList.remove('hidden');
    });

    // Topic Button Click
    document.querySelectorAll('.topic-btn').forEach(button => {
        button.addEventListener('click', function() {
            selectedTopic = button.getAttribute('data-topic');
            topicsSection.classList.add('hidden');
            studyMethodSection.classList.remove('hidden');
            studyMethodSection.querySelector('.go-back-btn').classList.remove('hidden');
        });
    });

    // Study Method Button Click
    document.querySelectorAll('.study-btn').forEach(button => {
        button.addEventListener('click', function() {
            const method = button.getAttribute('data-method');
            studyMethodSection.classList.add('hidden');
            if (method === 'notes') {
                notesMethodSection.classList.remove('hidden');
                notesMethodSection.querySelector('.go-back-btn').classList.remove('hidden');
            } else if (method === 'lectures') {
                selectLanguageSection.classList.remove('hidden');
                selectLanguageSection.querySelector('.go-back-btn').classList.remove('hidden');
            }
        });
    });

    // Tutor Card Click
    document.querySelectorAll('.select-tutor-btn').forEach(button => {
        button.addEventListener('click', function() {
            selectedTutor = button.parentElement.getAttribute('data-tutor');
            notesMethodSection.classList.add('hidden');
            notesContent.classList.remove('hidden');
            notesContent.querySelector('.go-back-btn').classList.remove('hidden');
            viewNotesBtn.classList.remove('hidden');
        });
    });

    // View Notes Button Click
    viewNotesBtn.addEventListener('click', function() {
        if (selectedTutor && selectedTopic) {
            const notesUrl = notesData[selectedTutor][selectedTopic];
            notesIframe.src = notesUrl;
            notesContent.classList.add('hidden');
            iframeContainer.classList.remove('hidden');
            iframeContainer.querySelector('.go-back-btn').classList.remove('hidden');
            ratingCommentSection.classList.remove('hidden');
        }
    });

    // Go Back Button Click
    goBackButtons.forEach(button => {
        button.addEventListener('click', function() {
            const parentSection = button.parentElement;
            parentSection.classList.add('hidden');
            if (parentSection.id === 'basics') {
                startLearningBtn.classList.remove('hidden');
            } else if (parentSection.id === 'topics') {
                basicsSection.classList.remove('hidden');
            } else if (parentSection.id === 'study-method') {
                topicsSection.classList.remove('hidden');
            } else if (parentSection.id === 'notes-method') {
                studyMethodSection.classList.remove('hidden');
            } else if (parentSection.id === 'notes-content') {
                notesMethodSection.classList.remove('hidden');
            } else if (parentSection.classList.contains('iframe-container')) {
                notesContent.classList.remove('hidden');
                ratingCommentSection.classList.add('hidden');
            } else if (parentSection.id === 'select-language') {
                studyMethodSection.classList.remove('hidden');
            } else if (parentSection.id === 'english-channels' || parentSection.id === 'hindi-channels') {
                selectLanguageSection.classList.remove('hidden');
            } else if (parentSection.id === 'lecture-section') {
                if (selectedLanguage === 'english') {
                    englishChannelsSection.classList.remove('hidden');
                } else if (selectedLanguage === 'hindi') {
                    hindiChannelsSection.classList.remove('hidden');
                }
            }
            button.classList.add('hidden');
        });
    });

    // Star Rating Click Event
    starRating.addEventListener('click', function (e) {
        if (e.target.classList.contains('fa-star')) {
            const ratingValue = e.target.dataset.value;
            ratingInput.value = ratingValue;
            updateStarRating(ratingValue);
        }
    });

    // Update Star Rating Function
    function updateStarRating(value) {
        starRating.querySelectorAll('i').forEach(star => {
            if (star.dataset.value <= value) {
                star.classList.add('selected');
            } else {
                star.classList.remove('selected');
            }
        });
    }

    // Review Form Submit Event
    reviewForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const ratingValue = ratingInput.value;
        const comment = document.getElementById('comment').value;

        // Add review to the reviews container
        const reviewItem = document.createElement('div');
        reviewItem.classList.add('review-item');
        reviewItem.innerHTML = `
            <div class="review-rating">
                ${getStarIcons(ratingValue)}
            </div>
            <div class="review-comment">
                ${comment}
            </div>
        `;

        reviewsContainer.appendChild(reviewItem);
        reviewForm.reset();
        updateStarRating(0);
    });

    // Get Star Icons for Review
    function getStarIcons(rating) {
        let starIcons = '';
        for (let i = 1; i <= 5; i++) {
            starIcons += `<i class="fas fa-star ${i <= rating ? 'selected' : ''}"></i>`;
        }
        return starIcons;
    }

    // Lecture Section

    // Language Selection
    document.querySelectorAll('.language-btn').forEach(button => {
        button.addEventListener('click', function() {
            selectedLanguage = button.getAttribute('data-language');
            selectLanguageSection.classList.add('hidden');
            if (selectedLanguage === 'english') {
                englishChannelsSection.classList.remove('hidden');
            } else if (selectedLanguage === 'hindi') {
                hindiChannelsSection.classList.remove('hidden');
            }
        });
    });

    // English Channel Selection
    document.querySelectorAll('.english-channel-btn').forEach(button => {
        button.addEventListener('click', function() {
            selectedTutor = button.getAttribute('data-channel');
            englishChannelsSection.classList.add('hidden');
            lectureSection.classList.remove('hidden');
            lectureSection.querySelector('.go-back-btn').classList.remove('hidden');
            viewLectureBtn.classList.remove('hidden');
        });
    });

    // Hindi Channel Selection
    document.querySelectorAll('.hindi-channel-btn').forEach(button => {
        button.addEventListener('click', function() {
            selectedTutor = button.getAttribute('data-channel');
            hindiChannelsSection.classList.add('hidden');
            lectureSection.classList.remove('hidden');
            lectureSection.querySelector('.go-back-btn').classList.remove('hidden');
            viewLectureBtn.classList.remove('hidden');
        });
    });

    // View Lecture Button Click
    viewLectureBtn.addEventListener('click', function() {
        if (selectedTutor && selectedTopic) {
            const videoUrl = videoData[selectedLanguage][selectedTutor][selectedTopic];
            notesIframe.src = videoUrl;
            lectureSection.classList.add('hidden');
            iframeContainer.classList.remove('hidden');
            iframeContainer.querySelector('.go-back-btn').classList.remove('hidden');
            ratingCommentSection.classList.remove('hidden');
        }
    });
});


