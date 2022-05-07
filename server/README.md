# SOLID

1. Single Responsability Principle
2. Open/Closed Principle
3. Liskov Substitution Principle
4. Interface Segregation Principle
5. Dependency Inversion Principle

---

1. Cada classe/funcao tem uma responsabilidade unica;
2. As classes da aplicacao devem ser abertas para extensao mas fechadas para modificacoes;
3. Nos devemos poder substituir uma classe pai por uma heranca dela e tudo continuar funcionando;
4. ex. Impressora --> Imprimir, Scanear, Digitalizar,...
   class Impressora implements Imprimir, Scanear, Digitalizar
5. Inversao de dependencias
