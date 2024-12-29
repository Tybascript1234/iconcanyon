// Translate

let activeDiv = null; // متغير global لتخزين الـdiv النشط

function toggleDivA(event, divId) {
    const dide = document.getElementById(divId);
    const button = event.currentTarget;

    if (activeDiv && activeDiv !== dide) {
        activeDiv.style.display = 'none'; // إخفاء الـdiv النشط السابق
        document.getElementById(`toggleButtonss${activeDiv.id.slice(-1)}`).style.backgroundColor = 'lightgray'; // إعادة لون الزر السابق
    }

    if (dide.style.display === 'block') {
        dide.style.display = 'none';
        button.style.backgroundColor = '#365c6b00'; // العودة للون الأصلي
        activeDiv = null; // تحديث الـdiv النشط
    } else {
        dide.style.display = 'block';
        button.style.backgroundColor = '#365c6b12'; // تغيير لون الزر عند الظهور
        activeDiv = dide; // تحديث الـdiv النشط
    }

    event.stopPropagation(); // منع الحدث من الانتقال إلى عناصر أخرى
}

// إخفاء الـdiv عند النقر خارجه
document.addEventListener('click', function(event) {
    if (activeDiv && !activeDiv.contains(event.target)) {
        activeDiv.style.display = 'none';
        document.getElementById(`toggleButtonss${activeDiv.id.slice(-1)}`).style.backgroundColor = '#365c6b00'; // إعادة لون الزر السابق
        activeDiv = null; // تحديث الـdiv النشط
    }
});

// crispy
// متموج
function createRipple(event) {
    const button = event.currentTarget;
    const ripple = document.createElement("span");
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX ? event.clientX - rect.left - size / 2 : event.touches[0].clientX - rect.left - size / 2; // دعم اللمس
    const y = event.clientY ? event.clientY - rect.top - size / 2 : event.touches[0].clientY - rect.top - size / 2; // دعم اللمس
  
    ripple.style.width = ripple.style.height = `${size}px`;
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;
  
    ripple.classList.add("ripple");
  
    button.appendChild(ripple);
  
    setTimeout(() => {
      ripple.remove();
    }, 600);
  }
  
  const buttons = document.querySelectorAll('.ripple-button');
  buttons.forEach(button => {
    button.addEventListener('pointerdown', createRipple);  // استخدام pointerdown
  });  
  // //////////////

//   box-shadow
window.addEventListener('scroll', function() {
    const box = document.querySelector('.menu');
    const scrollPosition = window.scrollY;
    const triggerPoint = 100; // النقطة التي يتغير عندها لون الـ box-shadow

    if (scrollPosition > triggerPoint) {
        box.style.boxShadow = 'rgb(0 0 0 / 5%) 0 20px 40px 0, 0px 1px 2px rgb(204 204 204 / 13%)'; // اللون عند التمرير لأسفل
    } else {
        box.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0)'; // اللون عند التمرير لأعلى
    }
});


/////////////////


// scrollToTopBtn

// scrollToTopBtn//.

function fffo() {
  var div = document.getElementById("ffee");
  var buttonText = document.getElementById("buttonspan");
  if (div.style.display === "block") {
    div.style.display = "none"; // إظهار الديف
    buttonText.innerText = "Message";
  } else {
    div.style.display = "block"; // إخفاء الديف
    buttonText.innerText = "Message close";
  }
}


 document.addEventListener('DOMContentLoaded', function() {
    let currentIndex = 0;
    const profiles = [
        { 
            img: "unnamed (4).png", 
            name: "Figma", 
            desc: "We are happy to contact you if you wish.You can write to us using the correspondence button above", 
            link: "https://play.google.com/store/apps/details?id=com.figma.mirror&hl=en", 
            extraImages: [
                { img: "https://play-lh.googleusercontent.com/uuCiv63gjnMblhN5lcef_dSNb6ioNT-qTa70BOnxhaTvp4a9EShUmuTXTL8fwYFQk5o=w526-h296-rw", link: "" },
                { img: "https://play-lh.googleusercontent.com/dRhzWVa5Bjxb4LmeiHIXjgE8ANE4ClYHck57G3ycHfrbOPQm0YW2dbEeSZ_JgvrnPvjv=w526-h296-rw", link: "" },
                { img: "https://play-lh.googleusercontent.com/8zxzUvAI1tp3hvAm2EFI0VWgwJupH-o56SD_DFmMcy_cNAZ3G5pS-AjaN6nNCBLT5T4=w526-h296-rw", link: "" }
            ]
        },
        { 
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/ChatGPT_logo.svg/2048px-ChatGPT_logo.svg.png", 
            name: "ChatGPT", 
            desc: "It is an interactive language model developed by OpenAI that is good at answering questions, writing creatively, and helping with a wide range of text tasks.", 
            link: "https://play.google.com/store/apps/details?id=com.openai.chatgpt&hl=en",
            extraImages: [
                { img: "https://play-lh.googleusercontent.com/8e0yFJ-T_ObwAfwq-Yfy6IpFGijH1wB841hsiMluRUPPi_3d9KsvreMP9WKG32zKM_Y=w2560-h1440-rw", link: "" },
                { img: "https://play-lh.googleusercontent.com/dlEvi5vi4ufI5YEj6IIH2syUYBByHe_JkF9DP8RDEIlV32cULG3_jAWneHRx5gnxIdKo=w526-h296-rw", link: "" },
                { img: "https://play-lh.googleusercontent.com/N41jOQ4dQDdkY-rhTzzIsNbX0PGeHK_QNAO8K0gpBpTl_u2MWdytDtO46EmC3thQBg=w526-h296-rw", link: "" }
            ]
        },
        { 
            img: "https://play-lh.googleusercontent.com/4kF2IUQxdLs86iAVsmnHA1B34uO-dvtszKM8qzscc1InZb-2_JI0WANyOiWiV3qyNg", 
            name: "Remove", 
            desc: "It is a free tool to remove image background easily and quickly, allowing you to get high-quality transparent images with just one click.", 
            link: "https://play.google.com/store/apps/details?id=bg.remove.android&hl=en",
            extraImages: [
                { img: "https://play-lh.googleusercontent.com/DbgQL2V5pxiZeSeXDCMpoOA6yAbBH21w6Nzt5DGnTFOQ59-AVHollnjnp-Xc3m3FFMI=w526-h296-rw", link: "" },
                { img: "https://play-lh.googleusercontent.com/IF699qN0jSO9wEUUGDczEt4-TpcDFpjQMlwdlrethRLXM2g8-1HwwpzKub9p7p7QN8c=w2560-h1440-rw", link: "" },
                { img: "https://play-lh.googleusercontent.com/I-zHHONjsyUxw2QUP35wO2Vi8R8P8Vi1H1J7W6aBJ6bSPJDyJBxm73TfMhVdG0SnKSg=w2560-h1440-rw", link: "" }
            ]
        }
    ];

    function updateContent() {
        const profile = profiles[currentIndex];
        document.getElementById('profileImage').src = profile.img;
        document.getElementById('profileName').textContent = profile.name;
        document.getElementById('profileDescription').textContent = profile.desc;
        document.getElementById('profileLink').href = profile.link;

        // Update extra images
        if (profile.extraImages && profile.extraImages.length >= 3) {
            document.getElementById('image1').src = profile.extraImages[0].img;
            document.getElementById('image1').addEventListener('click', function() {
                window.open(profile.extraImages[0].link, '_blank');
            });

            document.getElementById('image2').src = profile.extraImages[1].img;
            document.getElementById('image2').addEventListener('click', function() {
                window.open(profile.extraImages[1].link, '_blank');
            });

            document.getElementById('image3').src = profile.extraImages[2].img;
            document.getElementById('image3').addEventListener('click', function() {
                window.open(profile.extraImages[2].link, '_blank');
            });
        }

        currentIndex = (currentIndex + 1) % profiles.length;
    }

    function toggleDiv() {
        const div = document.getElementById('dynamicDiv');
        const hideButton = document.getElementById('hideButton');
        const showButton = document.getElementById('showButton');

        if (div.style.display === "none" || div.style.display === "") {
            div.style.display = "block";
            hideButton.style.display = "inline-block";
            showButton.style.display = "none";
        } else {
            div.style.display = "none";
            hideButton.style.display = "none";
            showButton.style.display = "flex";
        }
    }

    document.getElementById('hideButton').addEventListener('click', toggleDiv);
    document.getElementById('showButton').addEventListener('click', toggleDiv);
    updateContent(); 
    setInterval(updateContent, 10000);
});



document.addEventListener('click', function(event) {
    const target = event.target;
    
    // Toggle the display of the divs when clicking on the buttons
    if (target.matches('.show-btn')) {
        const targetId = target.getAttribute('data-target');
        const targetDiv = document.getElementById(targetId);
        if (!targetDiv.classList.contains('visible')) {
            // Show the div
            targetDiv.classList.add('visible');
            targetDiv.classList.remove('coffees');
            targetDiv.style.display = 'block';
        } else {
            // Hide the div
            targetDiv.classList.remove('visible');
            targetDiv.classList.add('coffees');
            targetDiv.style.display = 'none';
        }
    }

    // Hide the div when clicking on the hide button inside it
    if (target.matches('.hide-btn')) {
        const targetId = target.getAttribute('data-target');
        const targetDiv = document.getElementById(targetId);
        targetDiv.classList.remove('visible');
        targetDiv.classList.add('coffees');
        targetDiv.style.display = 'none';
    }

    // Hide specific divs when clicking outside of them
    ['wwc1', 'wwc2', 'wwc3', 'wwc4', 'wwc5', 'wwc6', 'wwc7', 'wwc8', 'wwc11', 'wwc12', 'wwc13', 'wwc14', 'wwc15', 'resetButton', 'wwc17'].forEach(function(id) {
        const div = document.getElementById(id);
        if (div && div.classList.contains('visible') && !div.contains(target) && !target.matches(`[data-target="${id}"]`)) {
            div.classList.remove('visible');
            div.classList.add('coffees');
            div.style.display = 'none';
        }
    });
});








        




// script.js

document.addEventListener('DOMContentLoaded', (event) => {
    const savedMode = localStorage.getItem('mode');
    if (savedMode) {
        document.body.classList.add(savedMode);
        if (savedMode === 'day-mode') {
            updateButtonIcons('dayButton');
            updateSelectedButton('Light mode');
        } else if (savedMode === 'night-mode') {
            updateButtonIcons('nightButton');
            updateSelectedButton('Night mode');
        }
    } else {
        // إذا لم يكن هناك وضع مخزن، اعرض الوضع النهاري كالوضع الافتراضي
        setDayMode();
    }
});

function setDayMode() {
    document.body.classList.remove('night-mode');
    document.body.classList.add('day-mode');
    updateButtonIcons('dayButton');
    updateSelectedButton('Light mode');
    localStorage.setItem('mode', 'day-mode');
}

function setNightMode() {
    document.body.classList.remove('day-mode');
    document.body.classList.add('night-mode');
    updateButtonIcons('nightButton');
    updateSelectedButton('Night mode');
    localStorage.setItem('mode', 'night-mode');
}

function updateButtonIcons(activeButtonId) {
    const dayButton = document.getElementById('dayButton');
    const nightButton = document.getElementById('nightButton');
    
    const checkmarkIcon = '<ion-icon name="checkmark-outline" role="img" class="md hydrated" aria-label="checkmark outline"></ion-icon>';

    // إزالة أيقونة التأكيد من كلا الزرين
    dayButton.innerHTML = 'Light mode';
    nightButton.innerHTML = 'Night mode';

    // إضافة أيقونة التأكيد إلى الزر النشط
    if (activeButtonId === 'dayButton') {
        dayButton.innerHTML += ' ' + checkmarkIcon;
    } else if (activeButtonId === 'nightButton') {
        nightButton.innerHTML += ' ' + checkmarkIcon;
    }
}

function updateSelectedButton(buttonName) {
    const selectedButtonSpan = document.getElementById('selectedButton');
    selectedButtonSpan.textContent = buttonName;
}



// //  context-menu
// document.addEventListener("mouseup", function(event) {
//     var contextMenu = document.getElementById("context-menu");
//     var selectedText = window.getSelection().toString().trim();
//     var selectedLink = '';
//     if (event.target.tagName === 'A') {
//         selectedLink = event.target.href;
//     } else if (event.target.closest("a")) {
//         selectedLink = event.target.closest("a").href;
//     }
//     if (selectedText !== "" || selectedLink !== "") {
//         contextMenu.style.display = "flex";
//         contextMenu.style.left = event.pageX + "px";
//         contextMenu.style.top = event.pageY + "px";
//         if (selectedLink) {
//             document.getElementById("open-link-button").style.display = "flex";
//             document.getElementById("open-link-button").setAttribute("data-link", selectedLink);
//         } else {
//             document.getElementById("open-link-button").style.display = "none";
//         }
//     } else {
//         contextMenu.style.display = "none";
//     }
// });

// function copyText() {
//     var selectedText = window.getSelection().toString();
//     navigator.clipboard.writeText(selectedText)
//         .then(() => alert("Text copied successfully"))
//         .catch(err => alert("Error copying text: " + err));
//     hideContextMenu();
// }

// function shareText() {
//     var selectedText = window.getSelection().toString();
//     if (navigator.share) {
//         navigator.share({
//             title: 'Shared Text',
//             text: selectedText,
//         })
//         .then(() => console.log('Successful share'))
//         .catch((error) => console.log('Error sharing:', error));
//     } else {
//         alert("To share, please copy the selected text manually.");
//     }
//     hideContextMenu();
// }

// function searchText() {
//     var selectedText = window.getSelection().toString();
//     var searchUrl = "https://www.google.com/search?q=" + encodeURIComponent(selectedText);
//     window.open(searchUrl, "_blank");
//     hideContextMenu();
// }

// function selectAllText() {
//     var selection = window.getSelection();
//     selection.selectAllChildren(document.body);
//     hideContextMenu();
// }

// function openLink() {
//     var link = document.getElementById("open-link-button").getAttribute("data-link");
//     if (link !== null && link !== "") {
//         window.open(link, "_blank");
//     }
// }

// function hideContextMenu() {
//     var contextMenu = document.getElementById("context-menu");
//     contextMenu.style.display = "none";
// }


// logo-link

function open_Link() {
    window.open("file:///C:/Users/Lenovo/OneDrive/Desktop/Code%20icon-20240405T023439Z-001/New%20Go/index1.html", "_blank");
}

function share_Link() {
    if (navigator.share) {
        navigator.share({
            title: 'مثال',
            text: 'تحقق من هذا الرابط المذهل!',
            url: 'file:///C:/Users/Lenovo/OneDrive/Desktop/Code%20icon-20240405T023439Z-001/New%20Go/index1.html'
        }).then(() => {
            console.log('تمت المشاركة بنجاح');
        }).catch((error) => {
            console.log('حدث خطأ أثناء المشاركة:', error);
        });
    } else {
        alert('ميزة المشاركة غير مدعومة في متصفحك.');
    }
}

function reload_Page() {
    location.reload();
}

// message-gmail

// message-gmail/.

// copy-image

// copy-image/.

// بحث 2
// Initialize Google Translate Element
function googleTranslateElementInit() {
    new google.translate.TranslateElement({
        pageLanguage: 'en'
    }, 'google_translate_element');
}

// Select language and update display based on the selected language
function selectLanguage(langCode) {
    var selectElement = document.querySelector('.goog-te-combo');
    if (selectElement) {
        selectElement.value = langCode;
        selectElement.dispatchEvent(new Event('change', { 'bubbles': true }));

        // Hide Google Translate tooltip on language selection
        var tooltipElement = document.getElementById('google_translate_tooltip');
        if (tooltipElement) {
            tooltipElement.style.display = 'none';
            tooltipElement.style.visibility = 'hidden';
        }

        // Update selected language display
        var selectedLanguageDiv = document.getElementById('selected_language_display');
        if (selectedLanguageDiv) {
            selectedLanguageDiv.textContent = '' + getLanguageName(langCode);
        }

        // Update language background display
        var languageBackground = document.getElementById('language_background_display');
        if (languageBackground) {
            languageBackground.style.backgroundPosition = '-1px -69px'; // Default position
            switch (langCode) {
                case 'ar':
                    languageBackground.style.backgroundPosition = '-1px -52px';
                    break;
                case 'ur':
                    languageBackground.style.backgroundPosition = '-1px -2772px';
                    break;
                case 'tr':
                    languageBackground.style.backgroundPosition = '-1px -2126px';
                    break;
                case 'fr':
                    languageBackground.style.backgroundPosition = '-1px -324px';
                    break;
                case 'ja':
                    languageBackground.style.backgroundPosition = '-1px -528px';
                    break;
                case 'zh-CN':
                    languageBackground.style.backgroundPosition = '-1px -1072px';
                    break;
                case 'ru':
                    languageBackground.style.backgroundPosition = '-1px -868px';
                    break;
                case 'es':
                    languageBackground.style.backgroundPosition = '-1px -1480px';
                    break;
                // Add more cases for other languages as needed
            }
        }
    }
}

// Get the language name based on the language code
function getLanguageName(langCode) {
    switch (langCode) {
        case 'en':
            return 'English';
        case 'ar':
            return 'Arabic';
        case 'ur':
            return 'Urdu';
        case 'tr':
            return 'Turkish';
        case 'fr':
            return 'French';
        case 'ja':
            return 'Japanese';
        case 'zh-CN':
            return 'Chinese';
        case 'ru':
            return 'Russian';
        case 'es':
            return 'Spanish';
        default:
            return 'Unknown';
    }
}

// On window load, initialize Google Translate and set up search functionality
window.onload = function() {
    setTimeout(googleTranslateElementInit, 1000); // Wait for the Google Translate widget to load

    const searchInputField = document.getElementById('button_search_input');
    const translationButtons = document.querySelectorAll('#translation_buttons_container .button-container button');
    const noResultsMessageDiv = document.getElementById('no_results_message');
    const searchQueryDisplay = document.getElementById('searched_query_display');

    // Event listener for search input
    searchInputField.addEventListener('input', function() {
        const searchTerm = searchInputField.value.toLowerCase();
        let hasResults = false;

        // Loop through buttons and display/hide based on search term
        translationButtons.forEach(button => {
            const buttonName = button.getAttribute('data-name').toLowerCase();
            if (buttonName.includes(searchTerm)) {
                button.style.display = 'inline-block';
                hasResults = true;
            } else {
                button.style.display = 'none';
            }
        });

        // Handle display of no results message and button visibility
        if (searchTerm === '') {
            // If search is cleared, show all buttons and hide the no results div
            translationButtons.forEach(button => {
                button.style.display = 'inline-block';
            });
            noResultsMessageDiv.style.display = 'none';
        } else if (!hasResults) {
            // If no results found, display the no results div
            noResultsMessageDiv.style.display = 'block';
            searchQueryDisplay.textContent = searchTerm;
        } else {
            // Hide no results div if results are found
            noResultsMessageDiv.style.display = 'none';
        }
    });
};

// بحث 2/.



document.addEventListener('DOMContentLoaded', (event) => {
    let images = [];
    let svgs = [];
    let openImageButtonStates = []; // Array to store visibility state of the open button
    let currentIndex = -1;
    let uploadAttemptsLeft = 4;
    let isSaved = false;
    
    const spans = document.querySelectorAll('span');
    spans.forEach(span => {
        span.dataset.originalColor = window.getComputedStyle(span).color;
    });
    
    document.getElementById('file-input').addEventListener('change', function(event) {
        if (uploadAttemptsLeft > 0) {
            const file = event.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = function(e) {
                    images.push(e.target.result);
                    svgs.push(''); // Placeholder for SVG
                    openImageButtonStates.push(false); // Initialize visibility state
                    currentIndex = images.length - 1;
                    displayImage(e.target.result);
                    clearSVGContainers();
                    uploadAttemptsLeft--;
                    document.getElementById('uploads-left').textContent = `+ ${uploadAttemptsLeft}`;
                    updateDownloadButton(); // Update the download button with the current SVG
                    // Hide the open button when a new image is uploaded
                    document.getElementById('open-image-button').style.display = 'none';
                };
                reader.readAsDataURL(file);
            }
        } else {
            alert('قد انتهت الفترة التجريبية');
        }
    });
    
    document.getElementById('load-url-button').addEventListener('click', function() {
        if (uploadAttemptsLeft > 0) { // Check if uploads are still allowed
            const url = document.getElementById('image-url-input').value;
            if (url) {
                images.push(url);
                svgs.push(''); // Placeholder for SVG
                openImageButtonStates.push(false); // Initialize visibility state
                currentIndex = images.length - 1;
                displayImage(url);
                clearSVGContainers();
                uploadAttemptsLeft--;
                document.getElementById('uploads-left').textContent = `+ ${uploadAttemptsLeft}`;
                updateDownloadButton(); // Update the download button with the current SVG
                // Hide the open button when a new image is uploaded
                document.getElementById('open-image-button').style.display = 'none';
                document.getElementById('link-upload-container').style.display = 'none'; // Close the upload container
            }
        } else {
            alert('قد انتهت الفترة التجريبية');
        }
    });
    
    document.getElementById('file-upload-button').addEventListener('click', function() {
        document.getElementById('file-input').click();
    });
    
    document.getElementById('close-upload-container').addEventListener('click', function() {
        document.getElementById('link-upload-container').style.display = 'none';
    });
    
    document.getElementById('prev-image-button').addEventListener('click', function() {
        if (currentIndex > 0) {
            currentIndex--;
            displayImage(images[currentIndex]);
            displaySVG(svgs[currentIndex]);
            updateDownloadButton(); // Update the download button with the current SVG
            // Restore the visibility of the open button for the current image
            document.getElementById('open-image-button').style.display = openImageButtonStates[currentIndex] ? 'flex' : 'none';
        }
    });
    
    document.getElementById('next-image-button').addEventListener('click', function() {
        if (currentIndex < images.length - 1) {
            currentIndex++;
            displayImage(images[currentIndex]);
            displaySVG(svgs[currentIndex]);
            updateDownloadButton(); // Update the download button with the current SVG
            // Restore the visibility of the open button for the current image
            document.getElementById('open-image-button').style.display = openImageButtonStates[currentIndex] ? 'flex' : 'none';
        }
    });
    
    document.getElementById('generate-svg-button').addEventListener('click', function() {
        const img = document.getElementById('uploaded-image');
        if (img) {
            ImageTracer.imageToSVG(img.src, function(svgString){
                // تحسينات في تحويل الصورة إلى SVG
                svgString = optimizeSVG(svgString);
    
                svgs[currentIndex] = svgString;
    
                const svgContainer = document.getElementById('svg-output-container');
                svgContainer.innerHTML = '';
                const parser = new DOMParser();
                const svgDoc = parser.parseFromString(svgString, 'image/svg+xml');
                svgContainer.appendChild(svgDoc.documentElement);
    
                const codeContainer = document.getElementById('svg-code-container');
                codeContainer.textContent = svgString;
    
                updateDownloadButton(); // Update the download button with the current SVG
    
                const openButton = document.getElementById('open-image-button');
                openButton.style.display = 'flex'; // Show the open button for the current image
    
                // Save the visibility state of the open button for the current image
                openImageButtonStates[currentIndex] = true;
    
                // Show the notification
                const notification = document.getElementById('notification');
                notification.style.display = 'flex';
                setTimeout(() => {
                    notification.style.display = 'none';
                }, 3000);
    
            }, { scale: 1, ltres:0.01, qtres:0.01, pathomit:0, colorsampling:0, numberofcolors:64, mincolorratio:0, colorquantcycles:3, strokewidth:1 });
        } else {
            alert('يرجى رفع صورة أولاً.');
        }
    });
    
    document.getElementById('download-svg-button').addEventListener('click', function() {
        const svgString = this.getAttribute('data-svg') || svgs[currentIndex];
        if (svgString) {
            const fileName = prompt('يرجى إدخال اسم للصورة:');
            if (fileName) {
                downloadSVG(svgString, fileName);
            }
        } else {
            alert('لا توجد بيانات SVG للتحميل.');
        }
    });
    
    document.getElementById('open-image-button').addEventListener('click', function() {
        const svgString = document.getElementById('svg-code-container').textContent;
        if (svgString) {
            const win = window.open();
            win.document.write(`<html><head><title>My Start (SVG) Image</title></head><body><img src="data:image/svg+xml;base64,${btoa(svgString)}"></body></html>`);
        } else {
            alert('لا توجد بيانات SVG لعرضها.');
        }
    });
    
    document.getElementById('reset-button').addEventListener('click', function() {
        document.getElementById('uploaded-image-container').innerHTML = '';
        document.getElementById('svg-output-container').innerHTML = '';
        document.getElementById('svg-code-container').textContent = '';
        document.getElementById('file-input').value = '';
        images = [];
        svgs = [];
        openImageButtonStates = []; // Reset visibility states
        currentIndex = -1;
        uploadAttemptsLeft = 4;
        document.getElementById('uploads-left').textContent = `+ ${uploadAttemptsLeft}`;
        localStorage.removeItem('savedImages');
        localStorage.removeItem('savedSVGs');
        localStorage.removeItem('currentIndex');
        localStorage.removeItem('uploadAttemptsLeft');
        localStorage.removeItem('openImageButtonStates'); // Remove open button visibility states
        document.getElementById('save-button').innerHTML = '<ion-icon class="Full" name="bookmark-outline" title="Saves"></ion-icon>';
        isSaved = false;
    
        const downloadButton = document.getElementById('download-svg-button');
        downloadButton.removeAttribute('data-svg'); // Remove SVG data
        downloadButton.disabled = true; // Disable the download button
    
        const openButton = document.getElementById('open-image-button');
        openButton.style.display = 'none'; // Hide the open button
    });
    
    function toggle_button() {
        const container = document.getElementById('content-container');
        container.style.display = (container.style.display === 'flex' ? 'none' : 'flex');
    }
    
    document.getElementById('fullscreen-button').addEventListener('click', function() {
        const container = document.getElementById('content-container');
        const body = document.body;
        if (container.classList.contains('fullscreen')) {
            container.classList.remove('fullscreen');
            this.innerHTML = '<ion-icon name="scan-outline" class="Full" title="Full screen"></ion-icon>';
            body.classList.remove('fullscreen-active');
        } else {
            container.classList.add('fullscreen');
            this.innerHTML = '<ion-icon name="contract-outline" class="Full" title="Minimize screen"></ion-icon>';
            body.classList.add('fullscreen-active');
        }
    });
    
    document.getElementById('save-button').addEventListener('click', function() {
        if (isSaved) {
            localStorage.removeItem('savedImages');
            localStorage.removeItem('savedSVGs');
            localStorage.removeItem('currentIndex');
            localStorage.removeItem('uploadAttemptsLeft');
            localStorage.removeItem('openImageButtonStates'); // Remove open button visibility states
            this.innerHTML = '<ion-icon class="Full" name="bookmark-outline" title="Saves"></ion-icon>';
            isSaved = false;
            // Hide the open button
            document.getElementById('open-image-button').style.display = 'none';
        } else {
            localStorage.setItem('savedImages', JSON.stringify(images));
            localStorage.setItem('savedSVGs', JSON.stringify(svgs));
            localStorage.setItem('currentIndex', currentIndex);
            localStorage.setItem('uploadAttemptsLeft', uploadAttemptsLeft);
            localStorage.setItem('openImageButtonStates', JSON.stringify(openImageButtonStates)); // Save open button visibility states
            this.innerHTML = '<ion-icon class="Full onclick-button" name="bookmark" title="Cancel saving"></ion-icon>';
            isSaved = true;
        }
    });
    
    window.addEventListener('load', function() {
        if (localStorage.getItem('savedImages')) {
            images = JSON.parse(localStorage.getItem('savedImages'));
            svgs = JSON.parse(localStorage.getItem('savedSVGs'));
            openImageButtonStates = JSON.parse(localStorage.getItem('openImageButtonStates')) || [];
            currentIndex = parseInt(localStorage.getItem('currentIndex'), 10);
            uploadAttemptsLeft = parseInt(localStorage.getItem('uploadAttemptsLeft'), 10);
            if (currentIndex >= 0 && currentIndex < images.length) {
                displayImage(images[currentIndex]);
                displaySVG(svgs[currentIndex]);
    
                // Enable download button with the current SVG data
                const downloadButton = document.getElementById('download-svg-button');
                downloadButton.setAttribute('data-svg', svgs[currentIndex]);
                downloadButton.disabled = false;
    
                // Restore open button visibility state
                document.getElementById('open-image-button').style.display = openImageButtonStates[currentIndex] ? 'flex' : 'none';
            }
            document.getElementById('save-button').innerHTML = '<ion-icon class="onclick-button" name="bookmark" title="Cancel saving"></ion-icon>';
            document.getElementById('uploads-left').textContent = `+ ${uploadAttemptsLeft}`;
            isSaved = true;
        }
    });
    
    document.getElementById('copy-svg-button').addEventListener('click', function() {
        const svgString = document.getElementById('svg-code-container').textContent;
        if (svgString) {
            copyToClipboard(svgString);
        } else {
            alert('لا يوجد كود SVG لنسخه.');
        }
    });
    
// تعريف الدالة في النطاق العام
window.scrollToSection = function (sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    } else {
        console.error(`العنصر بمعرف ${sectionId} غير موجود.`);
    }
};
    
    const spansArray = Array.from(spans);
    spansArray.forEach(span => {
        span.addEventListener('click', function() {
            spansArray.forEach(s => s.style.color = s.dataset.originalColor);
            this.style.color = 'black';
        });
    });
    
    function displayImage(src) {
        const imageContainer = document.getElementById('uploaded-image-container');
        imageContainer.innerHTML = ''; // Clear previous image
    
        const img = document.createElement('img');
        img.id = 'uploaded-image';
        img.src = src;
        imageContainer.appendChild(img);
    }
    
    function displaySVG(svgString) {
        const svgContainer = document.getElementById('svg-output-container');
        svgContainer.innerHTML = '';
        const parser = new DOMParser();
        const svgDoc = parser.parseFromString(svgString, 'image/svg+xml');
        svgContainer.appendChild(svgDoc.documentElement);
    
        const codeContainer = document.getElementById('svg-code-container');
        codeContainer.textContent = svgString;
    }
    
    function clearSVGContainers() {
        document.getElementById('svg-output-container').innerHTML = '';
        document.getElementById('svg-code-container').textContent = '';
    }
    
    // تحسينات في تحويل الصورة إلى SVG
    function optimizeSVG(svgString) {
        // هنا يمكنك إضافة أي تحسينات أخرى في عملية تحويل الصورة إلى SVG
        // على سبيل المثال، استخدام مكتبات لضغط SVG مثل SVGO
        // يمكنك استخدام SVGO عبر واجهة برمجة التطبيقات (API) أو كحزمة Node.js
        return svgString;
    }
    
    // تحسينات في تحميل الصورة SVG
    function downloadSVG(svgString, fileName) {
        const blob = new Blob([svgString], { type: 'image/svg+xml' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `${fileName}.svg`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    }
    
    function copyToClipboard(text) {
        navigator.clipboard.writeText(text).then(function() {
            alert('تم نسخ كود SVG بنجاح!');
        }, function(err) {
            alert('فشل في نسخ كود SVG: ' + err);
        });
    }
    
    document.getElementById('color-picker').addEventListener('change', function(event) {
        updateSVGColor(event.target.value);
    });
    
    function updateSVGColor(color) {
        const svg = document.querySelector('#svg-output-container svg');
        if (svg) {
            svg.querySelectorAll('path, circle, rect, polyline, polygon').forEach(function(element) {
                element.style.fill = color; // يغير لون الحشوة
                element.style.stroke = color; // يغير لون الخط
            });
        }
    }
    
    function updateSVGColorInString(svgString, color) {
        const parser = new DOMParser();
        const svgDoc = parser.parseFromString(svgString, 'image/svg+xml');
        svgDoc.querySelectorAll('path, circle, rect, polyline, polygon').forEach(function (element) {
            element.setAttribute('fill', color);
            element.setAttribute('stroke', color);
        });
        return new XMLSerializer().serializeToString(svgDoc);
    }
    
    // إذا أردت جعلها متاحة في النطاق العام:
    window.updateSVGColorInString = updateSVGColorInString;    
    
    // تحديث زر التنزيل ببيانات SVG الحالية
    function updateDownloadButton() {
        const downloadButton = document.getElementById('download-svg-button');
        downloadButton.setAttribute('data-svg', svgs[currentIndex]);
        downloadButton.disabled = !svgs[currentIndex];
    }
    
    // Show the link upload container when the file input button is clicked
   // إظهار العنصر عند النقر على زر رفع الصورة
document.getElementById('file-input-button').addEventListener('click', function () {
    document.getElementById('link-upload-container').style.display = 'block';
});

// إخفاء العنصر عند رفع الصورة أو تحديد ملف
document.getElementById('file-input').addEventListener('change', function () {
    // التحقق من أن هناك ملفاً قد تم تحديده
    if (this.files && this.files.length > 0) {
        document.getElementById('link-upload-container').style.display = 'none';
    }
});

    
    // Drag and drop functionality
    const dropZone = document.getElementById('uploaded-image-container');
    
    dropZone.addEventListener('dragover', function(e) {
        e.preventDefault();
        this.classList.add('drag-over');
    });
    
    dropZone.addEventListener('dragleave', function() {
        this.classList.remove('drag-over');
    });
    
    dropZone.addEventListener('drop', function(e) {
        e.preventDefault();
        this.classList.remove('drag-over');
        
        if (uploadAttemptsLeft > 0) { // Check if uploads are still allowed
            const file = e.dataTransfer.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = function(e) {
                    images.push(e.target.result);
                    svgs.push(''); // Placeholder for SVG
                    openImageButtonStates.push(false); // Initialize visibility state
                    currentIndex = images.length - 1;
                    displayImage(e.target.result);
                    clearSVGContainers();
                    uploadAttemptsLeft--;
                    document.getElementById('uploads-left').textContent = `+ ${uploadAttemptsLeft}`;
                    updateDownloadButton(); // Update the download button with the current SVG
                    // Hide the open button when a new image is uploaded
                    document.getElementById('open-image-button').style.display = 'none';
                };
                reader.readAsDataURL(file);
            }
        } else {
            alert('قد انتهت الفترة التجريبية');
        }
    });
    
    document.getElementById('file-upload-button').addEventListener('click', function(event) {
        event.preventDefault(); // منع السلوك الافتراضي للنموذج
    
        document.getElementById('file-input').click();
    });    
    window.toggle_button = toggle_button;
});
