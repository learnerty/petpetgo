import React from 'react';
import '../css/my.css'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Sign from './sign'
import ExitHint from './ExitHint'
import HeadPortrait from './HeadPortrait'
class My extends React.Component{
  state = {
    exit:false
  }
  componentWillMount(){
    this.props.dispatch({type:'CHANGEHEADERVSL',headerval:'我的'})
  }
  headerClick(){
    this.setState({exit:!this.state.exit})
  }
  ensure(){
    this.setState({exit:!this.state.exit})
    this.props.dispatch({type:'CURRENTUSER',currentUser:''})
    this.props.dispatch({type:'GITHUB_HEADPORTRAIT',headpPortrait:''})
    localStorage.removeItem('petpetgoid')
    if(sessionStorage.getgoshops){
      let gethis = JSON.parse(sessionStorage.getgoshops)
      gethis.forEach(item => (
        sessionStorage.removeItem(item)
      ))
      sessionStorage.removeItem('getgoshops')
    }
  }
  render(){
    return (
      <div className={this.props.auth.username ? "ucenter" : null} style={{width:'100%'}}>
        {
          this.props.auth.username ?
          <div>
            <div className="ucenter-username">
              <HeadPortrait/>
            </div>
            <ul className="ucenter-content">
              <li><Link to="/user/address"><svg  viewBox="0 0 1024 1024"><path fill="#707070" d="M721.452 84.224h-529.916c0 0-66.678 0.844-75.803 76.646v704.683c0 0-0.702 81.21 89.84 81.21h616.948c0 0 71.591-4.003 77.206-77.7v-569.922l-78.61 58.958-1.404 509.561-625.371-0.702v-704.683h469.554l57.552-78.049z"  /><path fill="#707070" d="M788.305 121.565l83.172 64.748 17.372-23.162c0 0 13.159-17.372 0-38.428 0 0-12.107-20.003-32.637-31.584 0 0-27.9-15.267-46.323 3.158l-21.583 25.266z"  /><path fill="#707070" d="M845.156 220.531l-141.603 187.926c0 0-12.634 23.162-34.742 33.69l-62.642 30.005c0 0-16.845 8.423-20.53-14.739l11.055-68.959c0 0-1.053-12.634 15.792-34.742l150.026-198.455 82.644 65.275z"  /><path fill="#707070" d="M320.857 573.222h371.117c0 0 12.107-3.158 11.582 17.372l0.016 34.742c0 0-2.649 9.475-16.862 7.371l-362.167 0.305c0 0-12.634 0.748-13.686-11.36v-40.006c-0.002 0 2.103-8.423 10-8.423z"  /><path fill="#707070" d="M320.857 711.139h371.117c0 0 12.107-3.158 11.582 17.372l0.016 34.742c0 0-2.649 9.475-16.862 7.371l-362.167 0.305c0 0-12.634 0.748-13.686-11.36v-40.006c-0.002 0 2.103-8.423 10-8.423z"  /></svg>
              <span>收货地址管理</span><svg viewBox="0 0 1024 1024"><path fill="#707070" d="M679.374008 511.753383 280.140305 112.531959c-11.102872-11.090593-11.102872-29.109991 0-40.177048 11.090593-11.109012 29.092595-11.109012 40.188304 0l414.455383 414.450267c2.229784 1.246387 4.973268 0.947582 6.874571 2.843768 6.076392 6.076392 8.508791 14.167674 7.936763 22.103414 0.572028 7.941879-1.860371 16.034185-7.936763 22.097274-1.902326 1.908466-4.650927 1.603521-6.886851 2.856048L320.329633 951.169251c-11.096732 11.084453-29.097712 11.084453-40.188304 0-11.102872-11.114129-11.102872-29.091572 0-40.200584L679.374008 511.753383z" /></svg></Link></li>
              <li><svg viewBox="0 0 1024 1024"><path fill="#707070" d="M871.994368 306.935808l0 0.059392c6.473728-13.664256 10.25024-27.930624 10.25024-42.556416l0-61.37856c0-101.658624-164.895744-184.136704-368.272384-184.136704-203.377664 0-368.273408 82.47808-368.273408 184.136704 0-5.035008 0.719872-9.951232 1.497088-14.865408-76.06272 33.687552-124.254208 82.838528-124.254208 137.622528l0 61.37856c0 56.942592 51.7888 107.83232 133.00736 141.579264l0 0c-6.473728 13.666304-10.25024 27.931648-10.25024 42.55744l0 61.37856c0 21.578752 7.79264 42.1376 21.458944 61.37856-13.666304 19.24096-21.458944 39.799808-21.458944 61.37856l0 61.37856c0 101.658624 164.895744 184.13568 368.273408 184.13568 203.375616 0 368.272384-82.477056 368.272384-184.13568l0-61.37856c0-21.938176-8.091648-42.857472-22.1184-62.338048-0.119808 0.119808-0.238592 0.300032-0.359424 0.41984 10.308608-14.625792 18.40128-29.850624 20.978688-45.974528 76.06272-33.74592 124.255232-82.837504 124.255232-137.622528l0-61.37856C1005.001728 391.631872 953.213952 340.682752 871.994368 306.935808zM513.972224 49.611776c198.941696 0 337.583104 80.859136 337.583104 153.447424 0 72.528896-138.641408 153.447424-337.583104 153.447424-198.943744 0-337.584128-80.918528-337.584128-153.447424C176.388096 130.471936 315.02848 49.611776 513.972224 49.611776zM53.630976 325.817344c0-35.84512 33.985536-73.546752 92.06784-102.677504l0 41.298944c0 101.658624 164.895744 184.136704 368.273408 184.136704 30.390272 0 59.758592-2.03776 87.99232-5.51424-56.285184 21.638144-127.792128 36.20352-210.750464 36.20352C192.27136 479.263744 53.630976 398.34624 53.630976 325.817344zM851.555328 755.469312c0 72.52992-138.641408 153.447424-337.583104 153.447424-198.943744 0-337.584128-80.917504-337.584128-153.447424 0-12.048384 5.154816-24.275968 12.407808-36.383744-0.060416-0.060416-0.180224-0.180224-0.239616-0.299008 61.7984 58.320896 184.316928 98.062336 325.415936 98.062336 141.277184 0 263.196672-40.040448 324.876288-98.482176-0.060416 0.060416-0.060416 0.060416-0.119808 0.119808C846.280704 730.774528 851.555328 743.181312 851.555328 755.469312zM724.842496 688.576512c-56.343552 21.697536-127.854592 36.20352-210.870272 36.20352-198.943744 0-337.584128-80.919552-337.584128-153.448448 0-10.42944 3.596288-20.978688 9.051136-31.408128 30.092288 10.130432 63.356928 18.102272 98.90304 23.436288 45.790208 75.644928 186.17344 130.729984 352.387072 130.729984 30.507008 0 59.998208-2.03776 88.351744-5.573632C725.020672 688.516096 724.962304 688.576512 724.842496 688.576512zM636.730368 602.021888c-78.764032 0-147.453952-12.947456-202.48064-32.78848 173.047808-10.190848 309.712896-79.660032 323.738624-167.17312 41.775104-18.521088 75.225088-41.6 96.744448-67.852288-0.060416 0-0.060416 0-0.060416 0 74.324992 30.210048 119.640064 73.366528 119.640064 114.366464C974.312448 521.102336 835.67104 602.021888 636.730368 602.021888zM579.547136 247.775232c0-6.473728-5.154816-11.449344-15.465472-14.7456-10.309632-3.356672-33.268736-7.672832-68.810752-12.828672-31.9488-4.496384-56.945664-8.991744-74.927104-13.426688s-32.607232-10.67008-43.81696-18.582528c-11.208704-8.03328-16.842752-17.383424-16.842752-27.932672 0-13.90592 10.068992-26.494976 30.091264-37.64224 20.020224-11.088896 51.549184-17.862656 94.585856-20.379648L484.361216 80.30208l58.143744 0 0 21.9392c64.975872 3.237888 107.05408 18.22208 126.173184 45.196288l-80.077824 13.426688c-15.644672-18.461696-39.743488-27.693056-72.46848-27.693056-16.425984 0-29.612032 2.038784-39.5008 6.234112-9.952256 4.07552-14.9248 9.110528-14.9248 14.98624 0 5.994496 4.795392 10.549248 14.385152 13.787136 9.530368 3.176448 30.09024 7.073792 61.498368 11.869184 34.526208 5.15584 61.6192 10.010624 81.21856 14.624768 19.6608 4.555776 35.305472 10.91072 47.053824 19.001344 11.687936 8.091648 17.5616 17.5616 17.5616 28.350464 0 16.664576-12.109824 30.449664-36.263936 41.537536-24.154112 11.088896-59.03872 17.624064-104.655872 19.601408l0 28.408832-58.143744 0 0-28.291072c-76.06272-3.177472-123.117568-21.339136-141.277184-54.306816l89.910272-9.590784c8.331264 20.740096 35.904512 31.110144 82.717696 31.110144 21.875712 0 38.06208-2.217984 48.371712-6.654976S579.547136 254.068736 579.547136 247.775232z" /></svg>
              <span>商家代金券</span><svg viewBox="0 0 1024 1024"><path fill="#707070" d="M679.374008 511.753383 280.140305 112.531959c-11.102872-11.090593-11.102872-29.109991 0-40.177048 11.090593-11.109012 29.092595-11.109012 40.188304 0l414.455383 414.450267c2.229784 1.246387 4.973268 0.947582 6.874571 2.843768 6.076392 6.076392 8.508791 14.167674 7.936763 22.103414 0.572028 7.941879-1.860371 16.034185-7.936763 22.097274-1.902326 1.908466-4.650927 1.603521-6.886851 2.856048L320.329633 951.169251c-11.096732 11.084453-29.097712 11.084453-40.188304 0-11.102872-11.114129-11.102872-29.091572 0-40.200584L679.374008 511.753383z" /></svg></li>
              <li><svg viewBox="0 0 1024 1024"><path fill="#707070" d="M66.519508 188.011025l890.958938 0 0 647.978974c-296.933783 0-594.026178 0-890.958938 0L66.519508 188.011025zM138.767995 231.261061c111.124913 109.019972 220.793662 219.836871 332.891739 327.884702 21.221324 24.931832 60.106959 24.77322 81.162508-0.331551 112.096031-108.048855 221.60719-218.533179 332.732104-327.553151C636.571668 231.261061 387.751696 231.261061 138.767995 231.261061zM109.446179 259.285325c-0.158612 168.637792 0 337.099574 0 505.735319 85.370343-84.222193 170.740686-168.461783 255.95344-252.859985C280.186865 427.747107 194.816522 343.524914 109.446179 259.285325zM658.76411 512.160659c85.205591 84.22424 170.418344 168.479179 255.786641 252.704442 0.158612-168.480202 0-336.941985 0-505.412978C829.182454 343.524914 743.968677 427.923116 658.76411 512.160659zM137.96163 793.861506c249.466702 0 498.93545 0 748.401128 0-85.37239-84.399225-170.898275-168.796404-256.269641-253.035994-34.346249 29.963429-63.99143 71.442122-110.318548 82.944084-54.594409 1.470491-87.641059-51.684126-125.70191-82.944084C308.702316 625.065102 223.331973 709.463304 137.96163 793.861506z" /></svg><span>意见反馈</span><svg viewBox="0 0 1024 1024"><path fill="#707070" d="M679.374008 511.753383 280.140305 112.531959c-11.102872-11.090593-11.102872-29.109991 0-40.177048 11.090593-11.109012 29.092595-11.109012 40.188304 0l414.455383 414.450267c2.229784 1.246387 4.973268 0.947582 6.874571 2.843768 6.076392 6.076392 8.508791 14.167674 7.936763 22.103414 0.572028 7.941879-1.860371 16.034185-7.936763 22.097274-1.902326 1.908466-4.650927 1.603521-6.886851 2.856048L320.329633 951.169251c-11.096732 11.084453-29.097712 11.084453-40.188304 0-11.102872-11.114129-11.102872-29.091572 0-40.200584L679.374008 511.753383z" /></svg></li>
              <li><svg viewBox="0 0 1024 1024"><path fill="#707070" d="M982.3744 505.14944c0.39936 254.1568-205.16864 460.1344-459.68384 460.58496C268.57472 966.18496 62.6176 760.6272 62.1056 506.05056 61.60384 251.99616 267.264 45.9264 521.78944 45.4656 775.8848 45.0048 981.9648 250.68544 982.3744 505.14944zM934.16448 505.99936C935.05536 279.67488 751.63648 95.6928 523.1104 93.67552 297.27744 91.67872 111.16544 277.22752 110.31552 505.20064 109.4656 731.57632 292.89472 915.5584 521.3696 917.52448 747.25376 919.47008 933.26336 734.03392 934.16448 505.99936zM545.75104 655.80032c-19.82464 0-39.87456 0-60.91776 0-1.6384-25.41568 0.2048-50.1248 9.39008-74.05568 11.8784-30.94528 34.21184-54.03648 57.18016-76.67712 15.93344-15.70816 32.48128-30.85312 47.74912-47.18592 28.75392-30.78144 35.21536-78.52032 16.68096-116.38784-9.92256-20.2752-25.81504-34.24256-46.90944-41.5232-28.53888-9.86112-57.73312-10.35264-86.38464-0.9216-40.0896 13.19936-58.60352 44.4416-66.2016 83.6096-2.31424 11.95008-2.9696 24.22784-4.43392 36.78208-19.968 0-39.70048 0-60.18048 0-1.21856-20.40832 1.30048-39.97696 6.61504-59.06432 20.65408-74.1376 79.6672-119.6032 156.71296-121.66144 34.78528-0.93184 68.73088 2.304 100.03456 18.91328 45.12768 23.95136 69.04832 62.17728 73.64608 112.64 3.42016 37.48864-2.80576 73.00096-24.76032 104.448-5.35552 7.66976-12.11392 14.52032-18.96448 20.96128-18.15552 17.05984-36.7616 33.62816-55.0912 50.49344-28.64128 26.35776-44.11392 58.53184-42.96704 97.9968 0.09216 3.14368-0.07168 6.2976-0.21504 9.44128C546.70336 654.17216 546.2528 654.71488 545.75104 655.80032zM562.28864 756.70528c-0.1536 26.8288-20.16256 46.34624-47.13472 45.98784-26.4704-0.34816-46.46912-20.85888-46.1312-47.3088 0.32768-25.6 21.11488-45.30176 47.40096-44.93312C543.04768 710.81984 562.44224 730.38848 562.28864 756.70528z" /></svg><span>常见问题</span><svg viewBox="0 0 1024 1024"><path fill="#707070" d="M679.374008 511.753383 280.140305 112.531959c-11.102872-11.090593-11.102872-29.109991 0-40.177048 11.090593-11.109012 29.092595-11.109012 40.188304 0l414.455383 414.450267c2.229784 1.246387 4.973268 0.947582 6.874571 2.843768 6.076392 6.076392 8.508791 14.167674 7.936763 22.103414 0.572028 7.941879-1.860371 16.034185-7.936763 22.097274-1.902326 1.908466-4.650927 1.603521-6.886851 2.856048L320.329633 951.169251c-11.096732 11.084453-29.097712 11.084453-40.188304 0-11.102872-11.114129-11.102872-29.091572 0-40.200584L679.374008 511.753383z" /></svg></li>
              <li><svg viewBox="0 0 1024 1024"><path fill="#707070" d="M752.646825 573.516052c-84.262102 0-158.677952 53.775764-181.084265 131.383306-83.175351-49.158606-155.147546-116.377544-211.231889-197.244316 74.144674-18.502399 134.506437-72.311933 158.270676-145.336086 23.62814-72.51557 12.289907-148.425448-31.097252-208.277604-42.707684-58.833967-111.556749-93.971232-184.072319-93.971232-39.924291 0-79.169107 10.524704-113.390513 30.384008C124.112716 128.680754 81.676208 196.476837 76.583213 271.402293c-0.407276 5.058203-0.474814 10.524704-0.474814 15.990183 0 7.842619 0.407276 15.3455 0.950651 20.60734 11.270694 367.8049 308.054051 655.931087 675.655314 655.931087 5.024433 0 9.709129-0.033769 14.937201-0.407276 72.51557-5.771447 135.38955-50.65161 164.3133-117.294426 11.067057-25.971511 16.431228-53.402257 15.887852-81.477686C945.748798 660.968823 859.653955 575.178925 752.646825 573.516052zM868.073718 818.763662c-18.536168 42.810015-59.138912 71.734788-105.785302 75.435063-3.191692 0.203638-6.111185 0.1361-9.574053 0.203638-329.781912 0-596.010369-258.522961-606.263897-590.748528-0.543376-5.330402-0.814552-10.659781-0.814552-16.261359 0-3.564175-0.067538-7.061836 0.271176-10.79588 3.530406-52.281737 33.066093-99.369172 79.034031-125.985366 23.696702-13.749142 50.78771-21.014616 78.490655-21.014616 50.312896 0 98.112552 24.408923 127.784338 65.283866 30.146601 41.621956 37.95545 94.785783 21.252023 145.913231-19.961634 61.447491-81.477686 104.359836-149.579737 104.359836l-0.092098 0.002047c-13.218046 0.271176-25.238824 7.719822-31.365358 19.434631l0 0c-5.607718 10.723226-5.318122 23.573905 0.76748 34.033118l0 0c64.028269 109.892853 155.351184 201.929012 264.055978 266.160919 35.239596 20.810978 84.600817 2.512217 97.230462-35.613102 17.042141-51.500954 64.910359-86.094844 121.19834-86.094844 0.067538 0 0.067538 0 0.067538 0 65.657372 1.01819 122.285091 57.408501 123.574457 123.065873C878.66596 784.305873 875.203092 802.061258 868.073718 818.763662z" /></svg><span>客服电话：</span><span>18832023498</span></li>
            </ul>
            {this.state.exit ? <ExitHint cancel={this.headerClick.bind(this)} ensure={this.ensure.bind(this)} val='退出后将无法查看当前订单，确定退出吗？'/> : null}
            <div onClick={this.headerClick.bind(this)} className="ucenter-exit">退出登录</div>
          </div> :
          <Sign/>
        }

      </div>
    )
  }
}
const mapStateToProps = (state) => ({
  auth:state.auth,
  headpPortrait:state.headpPortrait
})
export default connect(mapStateToProps)(My)
