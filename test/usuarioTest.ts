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

/*describe('Usuario', () => {
    it('Debe crear otro usuario', () => {
        let usuario = new Usuario();
        expect(usuario.generarEnlaceVerificador()).to.equal("demo");
    });  
});*/