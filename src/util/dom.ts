export const replaceDefaultPicture = (picture: string | undefined, container: HTMLElement): void => {
  if (picture && picture !== '') {
    const pictureContainer = container.querySelector('.picture') as HTMLDivElement
    const defaultPicture = pictureContainer.childNodes[0] as HTMLElement
    pictureContainer.removeChild(defaultPicture)
    const realPicture = document.createElement("img") as HTMLImageElement
    realPicture.setAttribute("style", `
      width: auto;
      max-width: 100%;
      height: auto;
      max-height: 100%;
      position: relative;
      margin: 0 auto;
      left: 50%;
      transform: translateX(-50%);
    `)
    realPicture.setAttribute("src", picture)
    realPicture.setAttribute("alt", "")
    pictureContainer.appendChild(realPicture)
  }
}
