document.addEventListener("DOMContentLoaded", async () => {
    const galleryContainer = document.getElementById("gallery");
    const category1Container = document.getElementById("category1");
    const category2Container = document.getElementById("category2");
    const category3Container = document.getElementById("category3");
    const searchInput = document.getElementById("searchInput");
    const searchResults = document.getElementById("searchResults");
    const clearButton = document.getElementById("clearButton");
    const downloadPopup = document.getElementById("downloadPopup");
    const popupImage = document.getElementById("popupImage");
    const popupName = document.getElementById("popupName");
    const colorPicker = document.getElementById("colorPicker");
    const searchFormat = document.getElementById("searchFormat"); // إضافة عنصر البحث عن الصيغ
    const toggleDownloadCounts = document.getElementById("toggleDownloadCounts");
    const downloadCounts = document.getElementById("downloadCounts");
    const totalDownloads = document.getElementById("totalDownloads");
    const containerCount = document.getElementById("containerCount");
    const popupLinkInput = document.getElementById("popupLinkInput"); // متغير لحقل إدخال الرابط
    const images = JSON.parse(localStorage.getItem("images")) || [];

    let downloadData = JSON.parse(localStorage.getItem("downloadData")) || {};

    function updateTotalDownloads() {
        const total = Object.values(downloadData).reduce((sum, count) => sum + count, 0);
        totalDownloads.textContent = total;
    }

    function saveDownloadData() {
        localStorage.setItem("downloadData", JSON.stringify(downloadData));
        updateTotalDownloads();
    }

    function displayDownloadCounts() {
        downloadCounts.innerHTML = "";
        const sortedEntries = Object.entries(downloadData).sort((a, b) => b[1] - a[1]);
        for (const [imageName, count] of sortedEntries) {
            const countDiv = document.createElement("div");
            countDiv.textContent = `${imageName}: ${count}`;
            downloadCounts.appendChild(countDiv);
        }
    }

    async function displayImages() {
        galleryContainer.innerHTML = "";
        category1Container.innerHTML = "";
        category2Container.innerHTML = "";
        category3Container.innerHTML = "";
        const searchText = searchInput.value.trim().toLowerCase();
        const resultsFragment = document.createDocumentFragment();
        let filteredImages = [];

        for (const imageData of images) {
            const { imageUrl, name, category } = imageData;
            if (name.toLowerCase().includes(searchText)) {
                filteredImages.push(imageData);

                const imageContainer = document.createElement("div");
                imageContainer.className = "image-container";
                imageContainer.setAttribute("onclick", "createRipple(event)");
                const image = document.createElement("img");
                const imageSrc = await fetchImage(imageUrl);
                image.src = imageSrc;
                image.draggable = false;
                const nameElement = document.createElement("div");
                nameElement.textContent = name;
                nameElement.title = name;
                const downloadButton = document.createElement("button");
                downloadButton.innerHTML = '<ion-icon name="ellipsis-horizontal"></ion-icon>';
                downloadButton.className = "download-btn";
                downloadButton.addEventListener("click", (event) => showDownloadPopup(event, imageSrc, name));
                imageContainer.appendChild(image);
                imageContainer.appendChild(nameElement);
                imageContainer.appendChild(downloadButton);
                switch (category) {
                    case "category1":
                        category1Container.appendChild(imageContainer);
                        break;
                    case "category2":
                        category2Container.appendChild(imageContainer);
                        break;
                    case "category3":
                        category3Container.appendChild(imageContainer);
                        break;
                    default:
                        galleryContainer.appendChild(imageContainer);
                        break;
                }

                // Add event listener for copying image name
                imageContainer.addEventListener("click", () => copyImageName(nameElement));

                // Add search result item
                const resultItem = document.createElement("button");
                resultItem.className = "result-item ripple-btn";
                resultItem.setAttribute("onmousedown", "createRipple(event)");
                resultItem.innerHTML = `
                    <div class="result-item-div">
                    <div class="icon-container"><ion-icon name="search-outline"></ion-icon></div>
                    <div class="image-name">${name}</div>
                    </div>
                    <div>
                    <button class="result-item-button notranslate ripple-btn" onmousedown="createRipple(event)"></button>
                    </div>
                `;
                resultItem.addEventListener("click", () => {
                    searchInput.value = name;
                    searchResults.style.display = "none";
                    displayImages();
                });
                resultsFragment.appendChild(resultItem);
            }
        }

        searchResults.innerHTML = "";
        searchResults.appendChild(resultsFragment);
        containerCount.textContent = filteredImages.length;
    }

    function copyImageName(nameElement) {
        const originalName = nameElement.textContent;
        if (nameElement.dataset.copied === "true") {
            return;
        }
        nameElement.dataset.copied = "true";
        navigator.clipboard.writeText(originalName)
            .then(() => {
                nameElement.textContent = "!Copied";
                setTimeout(() => {
                    nameElement.textContent = originalName;
                    nameElement.dataset.copied = "false";
                }, 1000);
            })
            .catch(err => console.error("Error copying text: ", err));
    }

    displayImages();

    searchInput.addEventListener("input", () => {
        if (searchInput.value.trim() !== "") {
            displayImages();
            searchResults.style.display = "block";
        } else {
            searchResults.style.display = "none";
            displayImages(); // Clear the search and display all images
        }
        clearButton.style.display = searchInput.value.trim() !== "" ? "flex" : "none";
    });

    clearButton.addEventListener("click", () => {
        searchInput.value = "";
        displayImages();
        searchResults.style.display = "none";
        clearButton.style.display = "none";
    });

    async function fetchImage(url) {
        try {
            const response = await fetch(url);
            const blob = await response.blob();
            return URL.createObjectURL(blob);
        } catch (error) {
            console.error("Error fetching image:", error);
            return null;
        }
    }

    function showDownloadPopup(event, imageUrl, name) {
        event.stopPropagation();
        popupImage.src = imageUrl;
        popupName.textContent = name;
        popupLinkInput.value = imageUrl; // تعيين قيمة الرابط إلى حقل الإدخال
        downloadPopup.style.display = "block";

        const rect = event.target.getBoundingClientRect();
        const popupRect = downloadPopup.getBoundingClientRect();

        let topPosition = rect.bottom + window.scrollY;
        let leftPosition = rect.left + window.scrollX;

        if (leftPosition + popupRect.width > window.innerWidth) {
            leftPosition = rect.right - popupRect.width + window.scrollX;
        }

        if (leftPosition < 0) {
            leftPosition = (window.innerWidth - popupRect.width) / 2 + window.scrollX;
        }

        if (topPosition + popupRect.height > window.innerHeight + window.scrollY) {
            topPosition = rect.top - popupRect.height + window.scrollY;
        }

        if (topPosition < 0) {
            topPosition = (window.innerHeight - popupRect.height) / 2 + window.scrollY;
        }

        downloadPopup.style.top = `${topPosition}px`;
        downloadPopup.style.left = `${leftPosition}px`;

        colorPicker.addEventListener("input", () => {
            applyColorToSVG(popupImage, colorPicker.value);
        });

        document.addEventListener("click", (event) => {
            if (!downloadPopup.contains(event.target)) {
                downloadPopup.style.display = "none";
            }
        });

        // Add event listener for copying link
        const copyLinkButton = document.getElementById("copyLinkButton");
        copyLinkButton.addEventListener("click", () => {
            navigator.clipboard.writeText(popupLinkInput.value)
                .then(() => {
                    alert("Link copied to clipboard!");
                })
                .catch(err => console.error("Error copying link: ", err));
        });
    }

    function applyColorToSVG(image, color) {
        fetch(image.src)
            .then(response => response.text())
            .then(svgText => {
                const parser = new DOMParser();
                const svgDoc = parser.parseFromString(svgText, "image/svg+xml");
                const svgElement = svgDoc.documentElement;

                svgElement.setAttribute("fill", color);

                const serializer = new XMLSerializer();
                const newSvgText = serializer.serializeToString(svgElement);

                const svgBlob = new Blob([newSvgText], { type: "image/svg+xml" });
                const url = URL.createObjectURL(svgBlob);
                image.src = url;
            })
            .catch(error => console.error("Error applying color to SVG:", error));
    }

    function downloadImage(imageUrl, name, format) {
        if (format === "svg") {
            fetch(imageUrl)
                .then(response => response.blob())
                .then(blob => {
                    const url = URL.createObjectURL(blob);
                    const a = document.createElement("a");
                    a.href = url;
                    a.download = `${name}.svg`;
                    document.body.appendChild(a);
                    a.click();
                    document.body.removeChild(a);
                    URL.revokeObjectURL(url);
                })
                .catch(error => console.error("Error downloading SVG:", error));
        } else {
            const a = document.createElement("a");
            a.href = imageUrl;
            a.download = `${name}.${format}`;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
        }
    }

    function convertAndDownloadImage(imageUrl, name, format) {
        const img = new Image();
        img.crossOrigin = "anonymous";
        img.src = imageUrl;
        img.onload = () => {
            const canvas = document.createElement("canvas");
            canvas.width = img.width;
            canvas.height = img.height;
            const ctx = canvas.getContext("2d");

            const selectedColor = colorPicker.value;
            ctx.fillStyle = selectedColor;
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            ctx.globalCompositeOperation = "destination-atop";
            ctx.drawImage(img, 0, 0);

            const dataUrl = canvas.toDataURL(`image/${format}`);
            downloadImage(dataUrl, name, format);
        };
    }

    function handleDownload(format) {
        const name = popupName.textContent;
        const src = popupImage.src;

        if (!downloadData[name]) {
            downloadData[name] = 0;
        }
        downloadData[name] += 1;
        saveDownloadData();

        if (format === "svg") {
            downloadImage(src, name, "svg");
        } else {
            convertAndDownloadImage(src, name, format);
        }
    }

    searchFormat.addEventListener("input", () => {
        const formatSearchText = searchFormat.value.trim().toLowerCase();
        const buttons = document.querySelectorAll("#downloadPopup button");
        buttons.forEach(button => {
            if (button.textContent.toLowerCase().includes(formatSearchText)) {
                button.style.display = "block";
            } else {
                button.style.display = "none";
            }
        });
    });

    document.getElementById("downloadSVG").addEventListener("click", () => handleDownload("svg"));
    document.getElementById("downloadPNG").addEventListener("click", () => handleDownload("png"));
    document.getElementById("downloadJPG").addEventListener("click", () => handleDownload("jpg"));
    document.getElementById("downloadWEBP").addEventListener("click", () => handleDownload("webp"));
    document.getElementById("downloadGIF").addEventListener("click", () => handleDownload("gif"));
    document.getElementById("downloadPDF").addEventListener("click", () => handleDownload("pdf"));
    document.getElementById("downloadMP4").addEventListener("click", () => handleDownload("mp4"));
    document.getElementById("downloadTDS").addEventListener("click", () => handleDownload("tds"));
    document.getElementById("downloadTIFF").addEventListener("click", () => handleDownload("tiff"));
    document.getElementById("downloadTGA").addEventListener("click", () => handleDownload("tga"));
    document.getElementById("downloadBMP").addEventListener("click", () => handleDownload("bmp"));
    document.getElementById("downloadICO").addEventListener("click", () => handleDownload("ico"));
    document.getElementById("downloadDXF").addEventListener("click", () => handleDownload("dxf"));
    document.getElementById("downloadRAW").addEventListener("click", () => handleDownload("raw"));
    document.getElementById("downloadEMF").addEventListener("click", () => handleDownload("emf"));
    document.getElementById("downloadPPM").addEventListener("click", () => handleDownload("ppm"));

    downloadCounts.style.display = downloadCounts.style.display || "none";

    toggleDownloadCounts.addEventListener("click", () => {
        if (downloadCounts.style.display === "none" || downloadCounts.style.display === "") {
            downloadCounts.style.display = "block";
            displayDownloadCounts();
        } else {
            downloadCounts.style.display = "none";
        }
    });

    document.addEventListener("click", (event) => {
        if (!searchInput.contains(event.target) && !searchResults.contains(event.target)) {
            searchResults.style.display = "none";
        }
    });

    searchInput.focus();
    updateTotalDownloads();
});
