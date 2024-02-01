"use strict";
class Curso {
    canal = '';
    curso = '';
    constructor(canal, curso) {
        this.canal = canal;
        this.curso = curso;
    }
}
let c1 = new Curso("CFBCursos", "typescript");
console.log(c1);
