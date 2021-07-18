declare module '*.ts'
declare module '*.js'
declare module '*.ts'

declare module '*.svg' {
  interface Svg {
    content: string;
    id: string;
    viewBox: string;
    node: any;
  }

  const svg: Svg;
  export default svg;
}

declare module '*.png' {
  const png: string;
  export default png;
}

declare module '*.mp3' {
  const mp3: string;
  export default mp3;
}

declare module '*.mp4' {
  const mp3: string;
  export default mp4;
}

declare module '*.gif' {
  const png: string;
  export default png;
}
