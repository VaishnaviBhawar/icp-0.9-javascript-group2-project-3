
                // Array of image objects with title, description, and image URL
    const images = [
                    {
                       
                        imageUrl: "../images/travel_advisors/allison.png",
                        title: "Allison Amini",
                        description: "Personalized travel experiences for discerning adventurers",
                    },
                    {
                       
                         imageUrl: "../images/travel_advisors/alstemarie.jpg",
                         title: "Arleta Cosby",
                         description: "Experts in Destination Weddings, Honeymoons,Groups, Cruises and Luxury Travel",
                   },
                   {
                       
                        imageUrl: "../images/travel_advisors/arleta.jpg",
                        title: "Arleta Cosby",
                       description: "Experts in Destination Weddings, Honeymoons, Groups, Cruises and Luxury Travel",
                   },
                   {
                       
                        imageUrl: "../images/travel_advisors/brandyn.jpg",
                       
                       title: "Brandyn Harris",
                       description: "Your Next Adventure Awaits!",
                   },
                   {
                       
                    imageUrl: "../images/travel_advisors/erin.jpg",
                       title: "Erin Green",
                       description: "Luxury travel advisor with passion for sustainability",
                   },
                   {
                       
                    imageUrl: "../images/travel_advisors/jaima.png",
                       title: "Jaime Crosthwait",
                       description: "Passionate Travel Advisor Specializing in Active Experiences",
                   },
                   {
                       
                    imageUrl: "../images/travel_advisors/mariyana.jpg",
                       title: "Mariyana Castleberry",
                        description: "Chief Adventure Officer",
                   },
                   {
                       
                    imageUrl: "../images/travel_advisors/nancy.jpg",
                       title: "Nancy Dorrans",
                        description: "Independent travel advisor in Portland Maine with 25+ years experience",
                   },
                   {
                       
                       imageUrl: "../images/travel_advisors/jenniffer.jpg",
                       title: "Jennifer Brown",
                       description: "Travel Specialist",
                   },
                   
                   
                ];
        
                // Function to generate image cards
                function displayCards() {
                    const container = document.getElementById('card-container');
                    images.forEach(image => {
                        // Create a card div
                        const card = document.createElement('div');
                        card.classList.add('card');
        
                        // Create an image element
                        const img = document.createElement('img');
                        img.src = image.imageUrl;
                        img.alt = image.title;
        
                        // Create a title element
                        const title = document.createElement('h3');
                        title.textContent = image.title;
        
                        // Create a description element
                        const description = document.createElement('p');
                        description.textContent = image.description;
        
                        // Append all elements to the card
                        card.appendChild(img);
                        card.appendChild(title);
                        card.appendChild(description);
        
                        // Append the card to the container
                        container.appendChild(card);
                    });
                }
        
                // Call the function to display the cards on page load
                displayCards();

                const toggle_btn = document.querySelector('#checkbox')

                toggle_btn.addEventListener('change', () => {
                    if(toggle_btn.checked){
                        document.body.classList.add('dark-mode')
                    }
                    else{
                        document.body.classList.remove('dark-mode')
                    }
                })

                const showMenu = (toggleId, navId) => {
                    const toggle = document.getElementById(toggleId),
                        nav = document.getElementById(navId),
                        navbarEle = document.querySelector('.header');
                 
                    if (toggle && nav && navbarEle) {
                        toggle.addEventListener('click', () => {
                            const isMenuVisible = nav.classList.toggle('show-menu');
                            toggle.classList.toggle('show-icon');
                 
                            if (isMenuVisible) {
                                navbarEle.style.borderBottomLeftRadius = "0px";
                                navbarEle.style.borderBottomRightRadius = "0px";
                            } else {
                                navbarEle.style.borderBottomLeftRadius = "20px";
                                navbarEle.style.borderBottomRightRadius = "20px";
                            }
                        });
                    } else {
                        console.error("Toggle button, navigation menu, or navbar element not found!");
                    }
                 };
                 
                 showMenu('nav_toggle', 'nav_menu');