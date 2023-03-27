// import "./Comp1.scss"
// 模块化引入
import styles from "./Comp1.module.scss";
import { Button, Space } from "antd";
import { DoubleRightOutlined } from '@ant-design/icons'
export default function index() {
    return (
        <div className={styles.box}>
            <p>comp1</p>

            <Button type="primary">Primary Button</Button>
            <DoubleRightOutlined style={{ fontSize: '40px', color: 'pink' }} />

        </div>
    );
}
