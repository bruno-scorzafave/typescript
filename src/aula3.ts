class Curso{
    canal = '';
    curso = '';

    constructor(canal:string, curso:string){
        this.canal = canal;
        this.curso = curso;
    }
}

let c1 = new Curso("CFBCursos", "typescript");

console.log(c1);
