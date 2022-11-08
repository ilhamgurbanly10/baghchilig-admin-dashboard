
const LayoutChildren = (props) => {

  return (
    <div
      className="site-layout-background"
      style={{
        padding: 24,
        minHeight: "100vh",
        backgroundColor: "white"
      }}
    >
      {props.children}
    </div>
  )

};

export default LayoutChildren;