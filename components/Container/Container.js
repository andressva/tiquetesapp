export default function Container({bgColor, children, custom}) {
  return (
    <div style={{
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      backgroundColor: bgColor || 'white',
      ...custom
    }}>
    {children}
    </div>
  )
}
