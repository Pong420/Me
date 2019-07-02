// ANSI Shadow
// http://patorjk.com/software/taag/

export const logs = [
  `
     ██╗     █████╗ ███╗   ███╗
     ██║    ██╔══██╗████╗ ████║
     ██║    ███████║██╔████╔██║
     ██║    ██╔══██║██║╚██╔╝██║
     ██║    ██║  ██║██║ ╚═╝ ██║
     ╚═╝    ╚═╝  ╚═╝╚═╝     ╚═╝
  `,
  `
  ██████╗  ██████╗ ███╗   ██╗ ██████╗ 
  ██╔══██╗██╔═══██╗████╗  ██║██╔════╝ 
  ██████╔╝██║   ██║██╔██╗ ██║██║  ███╗
  ██╔═══╝ ██║   ██║██║╚██╗██║██║   ██║
  ██║     ╚██████╔╝██║ ╚████║╚██████╔╝
  ╚═╝      ╚═════╝ ╚═╝  ╚═══╝ ╚═════╝ 
  `
];

logs.forEach(s =>
  // tslint:disable-next-line
  console.log('%c' + s.replace(/^ {2}/gm, ''), 'color: #2196f3')
);