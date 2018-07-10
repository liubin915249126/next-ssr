import {Button} from 'antd';
// import 'antd/dist/antd.less';  // or 'antd/dist/antd.less'

import stylesheet from "../src/style/index.less"


export default () => <div>
    Welcome to next.js!
    <Button type="primary">444</Button>

    
    <style jsx global>{ stylesheet }</style>
</div>