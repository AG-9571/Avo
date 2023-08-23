/* Geticon.jsx
 * Elemento que cubre los iconos de la app
 * Erencias: IconsApp.jsx
 */

export const GetIcon = ( {
  children,
  style,
  classI,
  viewBox,
  dir,
}: {
    children: React.ReactNode,
    style?: React.CSSProperties,
    classI?: string,
    viewBox?: string,
    dir?: string
} ) => {
  return (
    <div dir={dir} className={`ClassIcon-global ${classI}`} style={style}>
      <svg
        height="24"
        viewBox={`${viewBox == undefined ? '0 0 24 24' : viewBox}`}
        width="24"
        focusable="false"
        style={{
          display: 'block',
          textAlign: 'start',
          width: '100%',
          height: '100%',
        }}
      >
        {children}
      </svg>
    </div>
  )
}
