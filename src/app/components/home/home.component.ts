import {
  Component,
  OnInit,
  ViewChild,
  QueryList,
  ElementRef,
  AfterViewInit
} from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  projects = [
    {
      id: 1,
      goal: 10,
      raised: 0,
      unit: "has.",
      date: "01/03/2020",
      title: "Terreno conquistado",
      text: `Tras haber intentado la cesión de terrenos públicos para nuestros proyectos de reforestación
      y visto lo problemático que se presenta esta opción nos hemos decidido directamente por la
      compra de terrenos baldíos de bajo coste para llevar a cabo nuestras metas.
      Después de ello se volverán a vender ya reforestados con una cláusula que incluya el respeto
          por al menos
          100 años de esas plantaciones y un mantenimiento incluido durante los primeros 10 años por
          parte
          de nuestra asociación.
      La primera fase que nos hemos propuesto incluye la compra de uno o varios terrenos con un
          coste inferior a un euro el metro cuadrado con una extensión comprendida entre las dos y
          cinco hectáreas para prepararlos y echar nuestras primeras raíces.
      El coste de este proyecto incluye la compra venta del terreno y la preparación del mismo
          para la posterior plantación.
      `
    },
    {
      id: 2,
      goal: 500,
      raised: 0,
      unit: "árboles",
      date: "01/03/2020",
      title: "Raíces echadas",
      text: `Nuestro proyecto para echar raíces se resume en la compra de los árboles necesarios para
      hacer la plantación de la primera fase y la suma de árboles plantados por otros usuarios
      provenientes de nuestras reservas del vivero.
      Queremos además de llevar nuestros proyectos a buen puerto, facilitar a nuestros socios y usuarios la plantación en sus propios terrenos de
      nuestros árboles y especies autóctonas con el asesoramiento que en cada caso se necesite.
      Escríbenos sin compromiso para cualquier duda que te surja y te ayudaremos a resolverla en el
      tiempo más breve posible (enlace email info).`
    },
    {
      id: 3,
      goal: 100,
      raised: 0,
      unit: "toneladas",
      date: "01/03/2020",
      title: "Desintoxicación",
      text: `La limpieza de nuestro entorno es uno de nuestros retos más importantes. 
      Inscribete como voluntario y te iremos informando via email sobre nuestros proyectos de voluntariado 
      para la limpieza de parques, playas, carreteras...para que entre todos podamos desintoxicar poco a 
      poco nuestro planeta.(boton inscripcion socios/voluntariado).`
    }
  ];

  @ViewChild("progressElem", { static: false }) progressBars: ElementRef;

  constructor() {}

  ngOnInit() {
    this.projects.forEach(elem => {
      elem["percent"] = (elem.raised / elem.goal) * 100;
    });
  }
}
