import { Outlet } from "react-router-dom";

function Outer(){
    return (
        <div className="outer">
            {/* 각 컴포넌트 추가될 위치 */}
            <Outlet />
        </div>
    )
}
export default Outer;