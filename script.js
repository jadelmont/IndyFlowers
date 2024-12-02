document.addEventListener("DOMContentLoaded", function() {
    
    const header = document.createElement("header");
    header.style.fontSize = "200%";
    header.style.textAlign = "center";
    header.textContent = "Spring Flowers in Indiana";
    document.body.appendChild(header);

    
    const paragraph = document.createElement("p");
    paragraph.textContent = "Springtime in Indiana is never predictable. It could be filled with sunshine, rain, and even snow. The best way to prepare for Spring is to keep a range of clothing handy, because you never know what the weather will bring.";
    paragraph.style.fontSize = "120%"; 
    document.body.appendChild(paragraph);

    
    const ol = document.createElement("ol");

    
    const flowers = [
        { name: "Daffodil", description: "golden yellow rays of sunlight" },
        { name: "Crocus", description: "vibrant early bloomers" },
        { name: "Iris", description: "graceful and elegant" }
    ];

    flowers.forEach(flower => {
        const li = document.createElement("li");
        li.textContent = `${flower.name}, ${flower.description}`;
        ol.appendChild(li);
    });

    document.body.appendChild(ol);
});
