class Album {
    constructor(id, autor, titulo, precio, imagen){
       this.id = id;
       this.autor = autor;
       this.titulo = titulo;
       this.precio = precio;
       this.imagen = imagen;
       this.cantidad = 1;
    }
    
    sumarUnidad(){
        this.cantidad += 1;
        return this.cantidad;
    }
    
    restarUnidad(){
        if (this.cantidad > 1) {
            this.cantidad -= 1;
        }
        return this.cantidad;
    }
}

const album1 = new Album(1, "Gustavo Cerati", "Soda Stereo", 900, "cerati.jpg");
const album2 = new Album(2, "Charly García", "Serú Girán", 4500, "Serugiran.jpg");
const album3 = new Album(3, "Luis Alberto Spinetta", "Invisible", 2800, "spineta.jpg");
const album4 = new Album(4, "Andrés Calamaro", "Los Rodríguez", 1400, "Calamaro.jpg");
const album5 = new Album(5, "Gustavo Santaolalla", "Bajofondo", 2200, "Santaolalla.jpg");
const album6 = new Album(6, "Fito Páez", "La La La", 2000, "Paez.jpg");

let discos = [];

if (localStorage.getItem("discos")) {
    for (let album of JSON.parse(localStorage.getItem("discos"))) {
        let albumStock = new Album(album.id, album.autor, album.titulo, album.precio, album.imagen);
        discos.push(albumStock);
    }
} else {
    discos.push(album1, album2, album3, album4, album5, album6);
    localStorage.setItem("discos", JSON.stringify(discos))}