        const activities = {
            physical: [
                'Do 20 jumping jacks',
                'Take a 10-minute walk outside',
                'Try some yoga stretches',
                'Dance to your favorite song',
                'Do a quick workout routine',
                'Play with a pet',
                'Organize your room',
                'Do some gardening'
            ],
            creative: [
                'Draw something you see around you',
                'Write a short poem',
                'Try origami with paper',
                'Create a playlist for your mood',
                'Write in a journal',
                'Take photos of interesting things',
                'Make up a story',
                'Design your dream room'
            ],
            social: [
                'Call a friend or family member',
                'Send a nice message to someone',
                'Plan a hangout with friends',
                'Join an online community',
                'Write a letter to someone',
                'Play an online game with friends',
                'Share something fun on social media',
                'Compliment someone'
            ],
            learning: [
                'Watch an educational YouTube video',
                'Learn 5 words in a new language',
                'Read an interesting article',
                'Practice a skill you want to improve',
                'Watch a documentary',
                'Learn a fun fact',
                'Try a brain teaser or puzzle',
                'Research a topic you\'re curious about'
            ],
            relaxation: [
                'Take 5 deep breaths',
                'Listen to calming music',
                'Make yourself a warm drink',
                'Look out the window and observe',
                'Do a quick meditation',
                'Take a warm shower or bath',
                'Organize something small',
                'Plan something fun for later'
            ]
        };

        let selectedCategory = 'all';

        document.addEventListener('DOMContentLoaded', function() {
            const categoryButtons = document.querySelectorAll('.category-btn');
            
            categoryButtons.forEach(button => {
                button.addEventListener('click', function() {
                    categoryButtons.forEach(btn => btn.classList.remove('active'));
                    this.classList.add('active');
                    selectedCategory = this.getAttribute('data-category');
                });
            });
        });

        function getRandomActivity() {
            let activityPool = [];
        
            if (selectedCategory === 'all') {
                activityPool = Object.values(activities).flat();
            } else {
                activityPool = activities[selectedCategory] || [];
            }
            
            if (activityPool.length > 0) {
                const randomIndex = Math.floor(Math.random() * activityPool.length);
                const randomActivity = activityPool[randomIndex];
                
                const activityText = document.getElementById('activityText');
                activityText.style.opacity = '0.5';
                
                setTimeout(() => {
                    activityText.textContent = randomActivity;
                    activityText.style.opacity = '1';
                }, 200);
            }
        }
