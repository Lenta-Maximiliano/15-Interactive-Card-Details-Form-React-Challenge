# Solución al Desafío "Interactive Card Details Form"

Esta es una solución para el desafío [Interactive Card Details Form](https://www.frontendmentor.io/challenges/interactive-card-details-form-XpS8cKZDWw). Los desafíos de Frontend Mentor te ayudan a mejorar tus habilidades de desarrollo web mediante proyectos realistas.

## Tabla de Contenidos
- [Descripción General](#descripción-general)
  - [Enlaces](#enlaces)
- [Tecnologías Utilizadas](#tecnologías-utilizadas)
- [Características](#características)
- [Aprendizajes](#aprendizajes)
- [Autor](#autor)
- [¿Cómo Ejecutar Localmente?](#como-ejecutar-localmente)

---

## Descripción General

### Enlaces
- **URL del Sitio en Vivo**: [Ver sitio aquí](https://15-interactive-card-details-form.netlify.app/)

---

## Tecnologías Utilizadas
- React (con Vite)
- SCSS (modularizado con `@use`)
- Modularización de componentes
- Flujo de trabajo basado en **Mobile First**
- Validaciones con JavaScript y expresiones regulares
- Deploy con Netlify

---

## Características
- Diseño completamente responsive para dispositivos móviles y escritorio.
- Componentes React modulares (CardBack, CardFront, CardForm, ThanksSection, Footer).
- Estilos organizados con preprocesador **Sass/SCSS**, facilitando la reutilización y mantenimiento del código.
- Mejores prácticas en diseño web responsive.
- Validación en tiempo real de todos los campos del formulario (nombre, número, fecha, CVC).
- Al enviar el formulario exitosamente, se oculta y muestra una sección de agradecimiento.
- Botón para volver a completar el formulario.

---

## Aprendizajes
En este proyecto, reforcé los siguientes conceptos:
- **Componentización en React**: Dividir la interfaz en componentes pequeños y reutilizables (por ejemplo, CardBack, CardFront, CardForm, ThanksSection, Footer).
- **Convención de Nombres BEM**: Mantener una estructura de clases clara y consistente.
- **Flujo de trabajo con Git**: Gestionar ramas (por ejemplo, `dev` y `main`) y realizar commits estructurados.
- **Validaciones de formularios controlados en React**: Manejo del estado y validaciones personalizadas con useState.
- **Formato dinámico de inputs**: Aplicación de lógica para formatear el número de tarjeta automáticamente.
- **Uso de props para compartir datos entre componentes**: Comunicación efectiva entre el formulario y la visualización de la tarjeta.
- **Renderizado condicional en React**: Mostrar u ocultar componentes (como ThanksSection) según el estado de la aplicación.

### Ejemplo de Código
Aquí tienes un ejemplo de cómo modularicé un componente en React:

```jsx

import './CardFront.scss';

export default function CardFront({ cardName, cardNumber, cardMonth, cardYear }){

  const displayedCardName = cardName.trim() === "" ? "Jane Appleseed" : cardName;
  const displayedCardNumber = cardNumber.trim() === "" ? "0000 0000 0000 0000" : cardNumber;
  const displayedCardMonth = cardMonth.trim() === "" ? "00" : cardMonth;
  const displayedCardYear = cardYear.trim() === "" ? "00" : cardYear;

  return(
    <div className="card-front">
      <img className="card-front__logo" src="./images/card-logo.svg" alt="logo" />
      <p className="card-front__number">{displayedCardNumber}</p>
      <div className="card-front__details">
        <p className="card-front__details-name">{displayedCardName}</p>
        <p ><span className="card-front__details-month">{displayedCardMonth}</span>/<span className="card-front__details-year">{displayedCardYear}</span></p>
      </div>
    </div>
  )
}
  
```

# Autor
- **Perfil en Frontend Mentor**: [Lenta, Maximiliano Carlos](https://www.frontendmentor.io/profile/Lenta-Maximiliano)
- **Perfil en GitHub**: [Lenta-Maximiliano](https://github.com/Lenta-Maximiliano)
- **LinkedIn**: [Lenta, Maximiliano Carlos](https://linkedin.com/in/Lenta-Maximiliano)

## Como Ejecutar Localmente

1. **Clona este repositorio:**
   ```bash
   git clone https://github.com/Lenta-Maximiliano/15-Interactive-Card-Details-Form-React-Challenge.git

2. **Navega a la carpeta del proyecto:**
    ```bash
    cd 15-Interactive-Card-Details-Form-React-Challenge

3. **Instala las dependencias:**
    ```bash
    npm install

4. **Inicia el servidor de desarrollo:**
    ```bash
    npm run dev