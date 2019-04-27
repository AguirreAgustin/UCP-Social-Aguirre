import { expect } from 'chai';
import { Usuario } from '../usuario';

describe('Usuario', () => {
    /*it('Debe crear un usuario', () => {
        let usuario = new Usuario();
        expect(usuario.generarEnlaceVerificador()).to.equal("demo");
    });*/
    it('1.1 Agregar un album con un nombre', () => {
        let usuario = new Usuario();
        usuario.agregarAlbum("Album 1");
        
        
        expect(usuario.getAlbum().length).to.equals(1);
    }); 
    
     
});
describe('Usuario', () => {
    it('1.2 Quitar un album por el nombre', () => {
            let usuario = new Usuario();
            usuario.agregarAlbum("Album 1");
            usuario.agregarAlbum("Album 2");
            usuario.agregarAlbum("Album 3");
            
            var tamanioInicial = usuario.getAlbum().length;
            usuario.quitarAlbum("Album 2");
            expect(usuario.getAlbum().length).to.equals(tamanioInicial - 1);
            //expect(usuario.getAlbum().length).to.equals(2);

        }); 
});
describe('Usuario', () => {
 
    it('1.3 Obtener un album por el nombre', () => {
        let usuario = new Usuario();
        usuario.agregarAlbum("Album 1");
        usuario.agregarAlbum("Album 2");
        usuario.agregarAlbum("Album 3");
        usuario.agregarAlbum("Album 4");
        usuario.agregarAlbum("Album 22");

        var nombre = usuario.obtenerAlbumPorNombre("Album 22").getNombre();

        expect(nombre).to.equal("Album 22");
    });  

    
});

describe('Usuario', () => {
 
    it('1.4 No agregar albumes con el mismo nombre', () => {
        let usuario = new Usuario();
        usuario.agregarAlbum("Album 1");
        usuario.agregarAlbum("Album 2");
        usuario.agregarAlbum("Album 3");
        usuario.agregarAlbum("Album 4");
        usuario.agregarAlbum("Album 2");
        usuario.agregarAlbum("Album 3");

        var tamanioDelArray = usuario.getAlbum().length;

        expect(tamanioDelArray).to.equal(4);
    });  
});
describe('Usuario', () => {
    it('1.5 No quitar un album que no existe', () => {
            let usuario = new Usuario();
            usuario.agregarAlbum("Album 1");
            usuario.agregarAlbum("Album 2");
            usuario.agregarAlbum("Album 3");
            
            
            usuario.quitarAlbum("Album 1588");
            expect(usuario.getAlbum().length).to.equals(3);
            

        }); 
});

describe('Usuario', () => {
 
    it('1.6 Agregar 10 albums con nombre "Album X"', () => {
        let usuario = new Usuario();


        usuario.agregar10Albums();
        
        
        expect(usuario.getAlbum().length).to.equal(10);
        expect(usuario.obtenerAlbumPorNombre("Album 10").getNombre()).to.equal("Album 10");
        
    });  
});

describe('Usuario', () => {
 
    it('1.7 Quitar album 4 despues de agregar 10 albums"', () => {
        let usuario = new Usuario();


        usuario.agregar10Albums();
        
        usuario.quitarAlbum("Album 4");

        expect(usuario.getAlbum().length).to.equal(9);

        
        
    });  
});