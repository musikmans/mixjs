import React from 'react'

const SvgComponent = props => (
  <svg
    preserveAspectRatio="xMinYMin meet"
    viewBox="0 0 1838.5 1043.1"
    {...props}
  >
    <defs>
      <style>
        {
          '.prefix__cls-4{fill:none}.prefix__cls-15,.prefix__cls-16,.prefix__cls-4{stroke:#fff;stroke-miterlimit:10}.prefix__cls-12,.prefix__cls-5{font-size:21px}.prefix__cls-11,.prefix__cls-12,.prefix__cls-17,.prefix__cls-18,.prefix__cls-19,.prefix__cls-24,.prefix__cls-5{fill:#fff}.prefix__cls-12,.prefix__cls-17,.prefix__cls-18,.prefix__cls-19,.prefix__cls-24,.prefix__cls-5{font-family:Impact}.prefix__cls-6{letter-spacing:-.01em}.prefix__cls-7{letter-spacing:-.02em}.prefix__cls-10,.prefix__cls-27{opacity:.5}.prefix__cls-12{letter-spacing:-.01em}.prefix__cls-13{letter-spacing:-.02em}.prefix__cls-14{letter-spacing:0}.prefix__cls-15{fill:#444}.prefix__cls-16{fill-opacity:.51}.prefix__cls-17{font-size:17.27px}.prefix__cls-18{font-size:24px}.prefix__cls-19{font-size:19.43px}.prefix__cls-20,.prefix__cls-21{letter-spacing:-.02em}.prefix__cls-22{letter-spacing:.02em}.prefix__cls-23{letter-spacing:-.06em}.prefix__cls-24{font-size:10.29px}.prefix__cls-25{fill:#7a0909}.prefix__cls-27{mix-blend-mode:hard-light}'
        }
      </style>
      <filter
        id="prefix__luminosity-invert"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feColorMatrix values="-1 0 0 0 1 0 -1 0 0 1 0 0 -1 0 1 0 0 0 1 0" />
      </filter>
      <mask id="prefix__mask" x={731.91} y={34.78} maskUnits="userSpaceOnUse">
        <image
          transform="translate(731.9 34.8)"
          xlinkHref="data:image/png;base64,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"
        />
      </mask>
      <mask
        id="prefix__mask-2"
        x={893.91}
        y={55.78}
        width={176}
        height={111}
        maskUnits="userSpaceOnUse"
      >
        <image
          width={176}
          height={111}
          transform="translate(893.9 55.8)"
          xlinkHref="data:image/png;base64,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"
        />
      </mask>
    </defs>
    <g
      style={{
        isolation: 'isolate',
      }}
    >
      <g id="prefix__Layer_1" data-name="Layer 1">
        <g id="prefix__Console">
          <path
            fill="#8e0909"
            d="M0 1006.1l28.5 37 1810-3.1V54.1L1802.1 0l-.6 991.5L0 1006.1z"
          />
          <path fill="#ba0d0d" d="M0 0h1802.1v1009.21H0z" />
        </g>
        <g id="prefix__Controls">
          <path className="prefix__cls-4" d="M653.4 815.2v-50.9h-536v50.9" />
          <text className="prefix__cls-5" transform="translate(342.6 756)">
            {'CONTRO'}
            <tspan className="prefix__cls-6" x={66.9} y={0}>
              {'L'}
            </tspan>
            <tspan x={74.8} y={0}>
              {'S'}
            </tspan>
          </text>
        </g>
        <g id="prefix__Loop">
          <path className="prefix__cls-4" d="M651.5 946.2v-50.9h-536v50.9" />
          <text className="prefix__cls-5" transform="translate(277.6 888.9)">
            <tspan className="prefix__cls-7">{'L'}</tspan>
            <tspan x={7.7} y={0}>
              {'OOPS (IN MUSICAL BARS)'}
            </tspan>
          </text>
        </g>
        <g id="prefix__CrossFader">
          <path
            className="prefix__cls-4"
            d="M773.4 906.1v22.7m42.6-22.7v22.7m42.7-22.7v22.7m-128-22.7v22.7m42.7 11.2v22.6m42.7-22.6v22.6m42.7-22.6v22.6m-128-22.6v22.6m246.6-56.5v22.7m42.7-22.7v22.7m42.6-22.7v22.7m-128-22.7v22.7m42.7 11.2v22.6m42.7-22.6v22.6m42.6-22.6v22.6m-128-22.6v22.6m-239.3 12.7v-84m405.6 82.5v-84"
          />
          <text
            transform="translate(856.3 869.8)"
            fontSize={15.98}
            fontFamily="Impact"
            fill="#fff"
          >
            {'CROSS '}
            <tspan x={45.5} y={0} letterSpacing="-.02em">
              {'F'}
            </tspan>
            <tspan x={51.6} y={0}>
              {'ADER'}
            </tspan>
          </text>
          <path className="prefix__cls-4" d="M898.2 975.3v-84" />
          <path
            className="prefix__cls-10"
            transform="rotate(-90 898.6 934)"
            d="M892.7 730.8h11.2v405.55h-11.2z"
          />
        </g>
        <g id="prefix__Controls-2" data-name="Controls">
          <path className="prefix__cls-4" d="M1705.4 815.2v-50.9h-536v50.9" />
          <text className="prefix__cls-5" transform="translate(1394.6 756)">
            {'CONTRO'}
            <tspan className="prefix__cls-6" x={66.9} y={0}>
              {'L'}
            </tspan>
            <tspan x={74.8} y={0}>
              {'S'}
            </tspan>
          </text>
        </g>
        <g id="prefix__Loop-2" data-name="Loop">
          <path className="prefix__cls-4" d="M1703.5 946.2v-50.9h-536v50.9" />
          <text className="prefix__cls-5" transform="translate(1329.6 888.9)">
            <tspan className="prefix__cls-7">{'L'}</tspan>
            <tspan x={7.7} y={0}>
              {'OOPS (IN MUSICAL BARS)'}
            </tspan>
          </text>
        </g>
        <g id="prefix__Pitch">
          <path className="prefix__cls-10" d="M1729.5 247.3h4.5v500.26h-4.5z" />
          <path className="prefix__cls-4" d="M1687.5 246.1h84M1683 747.6h84" />
          <text className="prefix__cls-5" transform="translate(1704.7 235.8)">
            {'PITCH'}
          </text>
          <path
            className="prefix__cls-11"
            d="M1697.2 371.7v3.5h-6.7v-3.5zm-9.4 248.1h4.6v-4.6h3.1v4.6h4.6v3.1h-4.6v4.6h-3.1v-4.6h-4.6z"
            transform="translate(-.1 .8)"
          />
          <path className="prefix__cls-4" d="M1687.5 497.4h84" />
        </g>
        <text className="prefix__cls-12" transform="translate(816.4 234.3)">
          {'W'}
          <tspan className="prefix__cls-13" x={16.9} y={0}>
            {'A'}
          </tspan>
          <tspan className="prefix__cls-14" x={27.1} y={0}>
            {'VEFORM TRACK 1'}
          </tspan>
        </text>
        <text className="prefix__cls-12" transform="translate(815.1 749.5)">
          {'W'}
          <tspan className="prefix__cls-13" x={16.9} y={0}>
            {'A'}
          </tspan>
          <tspan className="prefix__cls-14" x={27.1} y={0}>
            {'VEFORM TRACK 2'}
          </tspan>
        </text>
        <g id="prefix__Timer_1" data-name="Timer 1">
          <path
            className="prefix__cls-10"
            d="M126.8 25.5h476.1v170.27H126.8z"
            id="prefix__Rime_Wave_Zone"
            data-name="Rime Wave Zone"
          />
          <path className="prefix__cls-4" d="M126.8 25.8h476.1v135H126.8z" />
          <path className="prefix__cls-15" d="M126.8 160.8h571.5v35H126.8z" />
          <path
            className="prefix__cls-16"
            d="M602.9 25.5h95.4V93h-95.4zm-.1 67.8h95.4v67.5h-95.4z"
          />
          <text className="prefix__cls-5" transform="translate(632 46.7)">
            {'BPM'}
          </text>
          <text className="prefix__cls-5" transform="translate(625.6 114)">
            {'SCALE'}
          </text>
        </g>
        <g id="prefix__Timer_2" data-name="Timer 2">
          <path
            className="prefix__cls-10"
            d="M1105.1 25.5h476.1v170.27h-476.1z"
            id="prefix__Rime_Wave_Zone-2"
            data-name="Rime Wave Zone"
          />
          <path className="prefix__cls-4" d="M1105.1 25.8h476.1v135h-476.1z" />
          <path className="prefix__cls-15" d="M1105.1 160.8h571.5v35h-571.5z" />
          <path
            className="prefix__cls-16"
            d="M1581.2 25.5h95.4V93h-95.4zm0 67.8h95.4v67.5h-95.4z"
          />
          <text className="prefix__cls-5" transform="translate(1610.3 46.7)">
            {'BPM'}
          </text>
          <text className="prefix__cls-5" transform="translate(1604 114)">
            {'SCALE'}
          </text>
        </g>
        <text className="prefix__cls-17" transform="translate(1704.4 187.1)">
          {'0'}
        </text>
        <text className="prefix__cls-17" transform="translate(1747.4 187.1)">
          {'10'}
        </text>
        <text className="prefix__cls-5" transform="translate(1702.5 69.2)">
          {'VOLUME'}
          <tspan x={0} y={25.2}>
            {'TRACK 2'}
          </tspan>
        </text>
        <path
          className="prefix__cls-11"
          d="M1718.5 120.8l-4.6-7.7a44.4 44.4 0 0 1 6.3-3.2l3.3 8.5a28.1 28.1 0 0 1 6.1-1.7l-1.4-8.9a47.8 47.8 0 0 1 7.1-.4l-.3 9.1a26.9 26.9 0 0 1 6.2 1l2.4-8.8a42.1 42.1 0 0 1 6.6 2.6l-4 8a51.8 51.8 0 0 1 5.3 3.4l5.7-6.8a43.1 43.1 0 0 1 5.1 4.9l-6.9 5.7s3.2 4.7 3.3 5.4l8.1-4a22.5 22.5 0 0 1 2.5 6.6l-8.7 2.4a25.2 25.2 0 0 1 1.1 6.2l8.9-.4a40.6 40.6 0 0 1-.3 7.1l-9-1.3s.1 2-1.5 6l8.4 3.3s-1.8 4.7-3.5 6.7l-7.6-4.9-23.3-15-29.2 22.7a43.3 43.3 0 0 1-3.8-6l7.9-4.1a25.1 25.1 0 0 1-2.2-5.9l-8.6 2.3a39 39 0 0 1-1.2-7l9-.6a48.2 48.2 0 0 1 .3-6.3l-8.8-1.5a41.5 41.5 0 0 1 1.9-7l8.4 3.2s2.1-4.9 2.7-5.5l-7.4-4.9a32.7 32.7 0 0 1 4.6-5.6l6.4 6.4a28.1 28.1 0 0 1 4.7-4zm-1673.9-.3l-4.6-7.7a44.4 44.4 0 0 1 6.3-3.2l3.2 8.5a30.4 30.4 0 0 1 6.1-1.7l-1.3-8.9a46.5 46.5 0 0 1 7.1-.4l-.4 9.1a26.9 26.9 0 0 1 6.2 1l2.5-8.8a39.1 39.1 0 0 1 6.5 2.6l-4 8a42.7 42.7 0 0 1 5.3 3.4l5.8-6.8a43.1 43.1 0 0 1 5.1 4.9l-6.9 5.7s3.2 4.7 3.3 5.4l8.1-4a26.8 26.8 0 0 1 2.5 6.6l-8.7 2.4a25.2 25.2 0 0 1 1.1 6.2l8.9-.4a35.3 35.3 0 0 1-.4 7.1l-9-1.3a17 17 0 0 1-1.4 6l8.3 3.3s-1.7 4.7-3.4 6.7l-7.6-4.9-23.3-15L30.7 167a39 39 0 0 1-3.9-6l8-4a26.7 26.7 0 0 1-2.2-6l-8.7 2.3a44.2 44.2 0 0 1-1.1-7l9-.6a33.1 33.1 0 0 1 .3-6.3l-8.8-1.5a41.5 41.5 0 0 1 1.9-7l8.4 3.3s2-5 2.7-5.6l-7.4-4.9a28.9 28.9 0 0 1 4.5-5.6l6.5 6.4a28.1 28.1 0 0 1 4.7-4z"
          transform="translate(-.1 .8)"
        />
        <text className="prefix__cls-17" transform="translate(30.6 187.1)">
          {'0'}
        </text>
        <text className="prefix__cls-17" transform="translate(73.6 187.1)">
          {'10'}
        </text>
        <text className="prefix__cls-5" transform="translate(28.7 69.2)">
          {'VOLUME'}
          <tspan x={0} y={25.2}>
            {'TRACK 1'}
          </tspan>
        </text>
        <path
          className="prefix__cls-11"
          d="M629.1 283.2l-4.6-7.6a34.4 34.4 0 0 1 6.3-3.2l3.3 8.4a25.1 25.1 0 0 1 6-1.6l-1.3-8.9a36 36 0 0 1 7.1-.4l-.4 9a28.2 28.2 0 0 1 6.3 1l2.4-8.7a39.1 39.1 0 0 1 6.5 2.6l-4 8s4.3 2.3 5.3 3.4l5.8-6.9a51.9 51.9 0 0 1 5.1 5L666 289a55.7 55.7 0 0 1 3.3 5.3l8.1-4a32.3 32.3 0 0 1 2.5 6.6l-8.7 2.5a24.9 24.9 0 0 1 1.1 6.1l8.9-.4a41.7 41.7 0 0 1-.3 7.2l-9-1.3a19.5 19.5 0 0 1-1.5 6l8.3 3.2s-1.7 4.8-3.4 6.8l-7.6-4.9-23.3-15-29.2 22.7a50 50 0 0 1-3.9-6l8-4.1a25.1 25.1 0 0 1-2.2-5.9l-8.7 2.2a44.2 44.2 0 0 1-1.1-7l9-.5a34.2 34.2 0 0 1 .3-6.4l-8.8-1.5a41.8 41.8 0 0 1 1.9-6.9l8.4 3.2s2.1-4.9 2.7-5.5l-7.4-5a26.9 26.9 0 0 1 4.5-5.5l6.5 6.3a34.6 34.6 0 0 1 4.7-4zM629 382l-4.6-7.6a34.4 34.4 0 0 1 6.3-3.2l3.3 8.4a28.3 28.3 0 0 1 6-1.7l-1.3-8.9a41.1 41.1 0 0 1 7.1-.3l-.3 9a27.7 27.7 0 0 1 6.2 1l2.4-8.7a36.2 36.2 0 0 1 6.6 2.5l-4 8a41.8 41.8 0 0 1 5.3 3.5l5.7-6.9a40.3 40.3 0 0 1 5.1 5l-6.9 5.6a58.5 58.5 0 0 1 3.3 5.4l8.1-4a26.8 26.8 0 0 1 2.5 6.6l-8.7 2.4a26.5 26.5 0 0 1 1.1 6.2l8.9-.4a40.6 40.6 0 0 1-.3 7.1l-9-1.3a19.7 19.7 0 0 1-1.5 6.1l8.3 3.2s-1.7 4.7-3.4 6.8l-7.6-4.9-23.3-15.1-29.2 22.7a53.9 53.9 0 0 1-3.9-5.9l8-4.1a27.2 27.2 0 0 1-2.2-5.9l-8.7 2.2a44.2 44.2 0 0 1-1.1-7l9-.5a34.1 34.1 0 0 1 .3-6.4l-8.8-1.5a41.5 41.5 0 0 1 1.9-7l8.4 3.3s2.1-5 2.7-5.6l-7.4-4.9a26.9 26.9 0 0 1 4.5-5.5l6.5 6.3a28.1 28.1 0 0 1 4.7-4zm0 99.2l-4.6-7.6a38.2 38.2 0 0 1 6.3-3.3l3.3 8.5a28.3 28.3 0 0 1 6-1.7l-1.3-8.9a41.1 41.1 0 0 1 7.1-.3l-.3 9a27.7 27.7 0 0 1 6.2 1l2.4-8.7a36.2 36.2 0 0 1 6.6 2.5l-4 8a41.8 41.8 0 0 1 5.3 3.5l5.7-6.9a40.3 40.3 0 0 1 5.1 5l-6.9 5.6s3.2 4.7 3.3 5.4l8.1-4a26.8 26.8 0 0 1 2.5 6.6l-8.7 2.4a25.2 25.2 0 0 1 1.1 6.2l8.9-.4a40.6 40.6 0 0 1-.3 7.1l-9-1.3a19.7 19.7 0 0 1-1.5 6.1l8.3 3.2s-1.7 4.7-3.4 6.8l-7.6-4.9-23.3-15.1-29.2 22.7a53.9 53.9 0 0 1-3.9-5.9l8-4.1a27.2 27.2 0 0 1-2.2-5.9l-8.7 2.2a44.2 44.2 0 0 1-1.1-7l9-.5a34.1 34.1 0 0 1 .3-6.4l-8.8-1.5a41.5 41.5 0 0 1 1.9-7l8.4 3.3s2.1-5 2.7-5.6l-7.4-4.9a26.9 26.9 0 0 1 4.5-5.5l6.5 6.3a28.1 28.1 0 0 1 4.7-4zm.5 98.8l-4.6-7.6a34.4 34.4 0 0 1 6.3-3.2l3.3 8.4a28.3 28.3 0 0 1 6-1.7l-1.3-8.9a41.1 41.1 0 0 1 7.1-.3l-.3 9a27.7 27.7 0 0 1 6.2 1l2.4-8.7a36.2 36.2 0 0 1 6.6 2.5l-4 8a41.8 41.8 0 0 1 5.3 3.5l5.7-6.9a40.3 40.3 0 0 1 5.1 5l-6.9 5.6a58.5 58.5 0 0 1 3.3 5.4s8.1-3.9 8.1-4a26.8 26.8 0 0 1 2.5 6.6l-8.7 2.4a26.5 26.5 0 0 1 1.1 6.2l8.9-.4a40.6 40.6 0 0 1-.3 7.1l-9-1.3a19.7 19.7 0 0 1-1.5 6.1l8.3 3.2s-1.7 4.7-3.4 6.8l-7.6-4.9-23.3-15.1-29.2 22.7a53.9 53.9 0 0 1-3.9-5.9l8-4.1a27.2 27.2 0 0 1-2.2-5.9l-8.7 2.2a44.2 44.2 0 0 1-1.1-7l9-.5a34.1 34.1 0 0 1 .3-6.4l-8.8-1.5a41.5 41.5 0 0 1 1.9-7l8.4 3.3s2.1-5 2.7-5.6l-7.4-4.9a26.9 26.9 0 0 1 4.5-5.5l6.5 6.3a28.1 28.1 0 0 1 4.7-4zm0 98.6l-4.6-7.6a34.4 34.4 0 0 1 6.3-3.2l3.3 8.4a25.1 25.1 0 0 1 6-1.6l-1.3-8.9a36 36 0 0 1 7.1-.4l-.3 9a27.7 27.7 0 0 1 6.2 1l2.4-8.7a42.1 42.1 0 0 1 6.6 2.6l-4 8a38.6 38.6 0 0 1 5.3 3.4l5.7-6.9a51.9 51.9 0 0 1 5.1 5l-6.9 5.7a55.7 55.7 0 0 1 3.3 5.3l8.1-4a29.3 29.3 0 0 1 2.5 6.6l-8.7 2.5a24.9 24.9 0 0 1 1.1 6.1l8.9-.4a41.7 41.7 0 0 1-.3 7.2l-9-1.3a19.5 19.5 0 0 1-1.5 6l8.3 3.2s-1.7 4.8-3.4 6.8l-7.6-4.9-23.3-15.1-29.2 22.8a50 50 0 0 1-3.9-6l8-4.1a25.1 25.1 0 0 1-2.2-5.9l-8.7 2.2a44.2 44.2 0 0 1-1.1-7l9-.5a34.2 34.2 0 0 1 .3-6.4l-8.8-1.5a41.8 41.8 0 0 1 1.9-6.9l8.4 3.2a53.9 53.9 0 0 1 2.7-5.6l-7.4-4.9a26.9 26.9 0 0 1 4.5-5.5l6.5 6.3a34.6 34.6 0 0 1 4.7-4z"
          transform="translate(-.1 .8)"
        />
        <path className="prefix__cls-4" d="M593.3 242.8h105v504.73h-105z" />
        <text className="prefix__cls-18" transform="translate(635.7 236)">
          {'FX'}
        </text>
        <text className="prefix__cls-19" transform="translate(616.8 364.8)">
          {'REVERB'}
        </text>
        <text className="prefix__cls-19" transform="translate(630.9 464.1)">
          <tspan className="prefix__cls-20">{'P'}</tspan>
          <tspan x={9.3} y={0}>
            {'AN'}
          </tspan>
        </text>
        <text className="prefix__cls-19" transform="translate(606.5 562.1)">
          <tspan className="prefix__cls-21">{'L'}</tspan>
          <tspan x={7.1} y={0}>
            {'OW-'}
          </tspan>
          <tspan className="prefix__cls-20" x={39.3} y={0}>
            {'P'}
          </tspan>
          <tspan x={48.5} y={0}>
            {'ASS'}
          </tspan>
        </text>
        <text className="prefix__cls-19" transform="translate(604.4 661.1)">
          {'HIGH-'}
          <tspan className="prefix__cls-20" x={43.6} y={0}>
            {'P'}
          </tspan>
          <tspan x={52.9} y={0}>
            {'ASS'}
          </tspan>
        </text>
        <text className="prefix__cls-19" transform="translate(623.4 266.5)">
          {'DE'}
          <tspan className="prefix__cls-22" x={18.8} y={0}>
            {'L'}
          </tspan>
          <tspan className="prefix__cls-23" x={26.7} y={0}>
            {'A'}
          </tspan>
          <tspan x={35.4} y={0}>
            {'Y'}
          </tspan>
        </text>
        <text className="prefix__cls-24" transform="translate(607.4 538.5)">
          {'L'}
        </text>
        <text className="prefix__cls-24" transform="translate(676.7 538.5)">
          {'R'}
        </text>
        <text className="prefix__cls-24" transform="translate(607.4 635.4)">
          {'0'}
        </text>
        <text className="prefix__cls-24" transform="translate(676.7 635.4)">
          {'10'}
        </text>
        <text className="prefix__cls-24" transform="translate(607.4 732.4)">
          {'0'}
        </text>
        <text className="prefix__cls-24" transform="translate(676.7 732.4)">
          {'10'}
        </text>
        <text className="prefix__cls-24" transform="translate(607.4 437.9)">
          {'0'}
        </text>
        <text className="prefix__cls-24" transform="translate(676.7 437.9)">
          {'10'}
        </text>
        <text className="prefix__cls-24" transform="translate(607.4 338.9)">
          {'0'}
        </text>
        <text className="prefix__cls-24" transform="translate(676.7 338.9)">
          {'10'}
        </text>
        <path
          className="prefix__cls-11"
          d="M1140.8 283.2l-4.6-7.6a34.4 34.4 0 0 1 6.3-3.2l3.3 8.4a25 25 0 0 1 6.1-1.6l-1.4-8.9a36 36 0 0 1 7.1-.4l-.3 9a26.9 26.9 0 0 1 6.2 1l2.4-8.7a38.3 38.3 0 0 1 6.6 2.6l-4 8a38.6 38.6 0 0 1 5.3 3.4l5.7-6.9a51.9 51.9 0 0 1 5.1 5l-6.8 5.7a56.7 56.7 0 0 1 3.2 5.3l8.1-4a28.6 28.6 0 0 1 2.6 6.6l-8.8 2.5a24.9 24.9 0 0 1 1.1 6.1l9-.4a36.2 36.2 0 0 1-.4 7.2l-9-1.3s.1 2-1.5 6l8.4 3.2s-1.8 4.8-3.4 6.8l-7.6-4.9-23.4-15-29.2 22.7a43.3 43.3 0 0 1-3.8-6l8-4.1a28.5 28.5 0 0 1-2.3-5.9l-8.6 2.2a34.1 34.1 0 0 1-1.1-7l8.9-.5a49.9 49.9 0 0 1 .3-6.4l-8.8-1.5a41.8 41.8 0 0 1 1.9-6.9l8.4 3.2s2.1-4.9 2.8-5.5l-7.4-5a26.9 26.9 0 0 1 4.5-5.5l6.4 6.3a43.9 43.9 0 0 1 4.7-4zm.1 98.8l-4.6-7.6a34.4 34.4 0 0 1 6.3-3.2l3.3 8.4a28.1 28.1 0 0 1 6.1-1.7l-1.4-8.9a41.1 41.1 0 0 1 7.1-.3l-.3 9a26.9 26.9 0 0 1 6.2 1l2.4-8.7a36.2 36.2 0 0 1 6.6 2.5l-4 8a41.8 41.8 0 0 1 5.3 3.5l5.7-6.9a40.3 40.3 0 0 1 5.1 5l-6.8 5.6a59.5 59.5 0 0 1 3.2 5.4l8.1-4a24.1 24.1 0 0 1 2.6 6.6l-8.8 2.4a26.5 26.5 0 0 1 1.1 6.2l9-.4a45.9 45.9 0 0 1-.4 7.1l-9-1.3s.1 2.1-1.5 6.1l8.4 3.2a36.7 36.7 0 0 1-3.4 6.8l-7.6-4.9-23.4-15.1-29.2 22.7a46.1 46.1 0 0 1-3.8-5.9l7.9-4.1a27.2 27.2 0 0 1-2.2-5.9l-8.6 2.2a34.1 34.1 0 0 1-1.1-7l8.9-.5a49.5 49.5 0 0 1 .3-6.4l-8.8-1.5a41.5 41.5 0 0 1 1.9-7l8.4 3.3s2.1-5 2.8-5.6l-7.4-4.9a26.9 26.9 0 0 1 4.5-5.5l6.4 6.3a28.1 28.1 0 0 1 4.7-4zm-.1 99.2l-4.6-7.6a38.2 38.2 0 0 1 6.3-3.3l3.3 8.5a28.1 28.1 0 0 1 6.1-1.7l-1.4-8.9a41.1 41.1 0 0 1 7.1-.3l-.3 9a26.9 26.9 0 0 1 6.2 1l2.4-8.7a33.5 33.5 0 0 1 6.6 2.5l-4 8a41.8 41.8 0 0 1 5.3 3.5l5.7-6.9a40.3 40.3 0 0 1 5.1 5l-6.8 5.6s3.1 4.7 3.2 5.4l8.1-4a24.1 24.1 0 0 1 2.6 6.6l-8.8 2.4a25.2 25.2 0 0 1 1.1 6.2l9-.4a35.3 35.3 0 0 1-.4 7.1l-9-1.3s.1 2.1-1.5 6.1l8.4 3.2a36.7 36.7 0 0 1-3.4 6.8l-7.6-4.9-23.4-15.1-29.2 22.7a46.1 46.1 0 0 1-3.8-5.9l8-4.1a31.4 31.4 0 0 1-2.3-5.9l-8.6 2.2a34.1 34.1 0 0 1-1.1-7l8.9-.5a49.5 49.5 0 0 1 .3-6.4l-8.8-1.5a41.5 41.5 0 0 1 1.9-7l8.4 3.3s2.1-5 2.8-5.6l-7.4-4.9a26.9 26.9 0 0 1 4.5-5.5l6.4 6.3a33.9 33.9 0 0 1 4.7-4zm1 98.8l-4.6-7.6a34.4 34.4 0 0 1 6.3-3.2l3.3 8.4a28.3 28.3 0 0 1 6-1.7l-1.3-8.9a41.1 41.1 0 0 1 7.1-.3l-.3 9a27.7 27.7 0 0 1 6.2 1l2.4-8.7a36.2 36.2 0 0 1 6.6 2.5l-4 8a41.8 41.8 0 0 1 5.3 3.5l5.7-6.9a40.3 40.3 0 0 1 5.1 5l-6.9 5.6a58.5 58.5 0 0 1 3.3 5.4s8.1-3.9 8.1-4a26.8 26.8 0 0 1 2.5 6.6l-8.7 2.4a26.5 26.5 0 0 1 1.1 6.2l8.9-.4a40.6 40.6 0 0 1-.3 7.1l-9-1.3a19.7 19.7 0 0 1-1.5 6.1l8.3 3.2s-1.7 4.7-3.4 6.8l-7.6-4.9-23.3-15.1-29.2 22.7a53.9 53.9 0 0 1-3.9-5.9l8-4.1a27.2 27.2 0 0 1-2.2-5.9l-8.7 2.2a44.2 44.2 0 0 1-1.1-7l9-.5a34.1 34.1 0 0 1 .3-6.4l-8.8-1.5a41.5 41.5 0 0 1 1.9-7l8.4 3.3s2.1-5 2.7-5.6l-7.4-4.9a26.9 26.9 0 0 1 4.5-5.5l6.5 6.3a28.1 28.1 0 0 1 4.7-4zm.6 98.3l-4.6-7.6a38.2 38.2 0 0 1 6.3-3.3l3.3 8.5a30.4 30.4 0 0 1 6.1-1.7l-1.4-8.9a48.5 48.5 0 0 1 7.2-.4l-.4 9.1a26.9 26.9 0 0 1 6.2 1l2.5-8.8a39.1 39.1 0 0 1 6.5 2.6l-4 8a51.8 51.8 0 0 1 5.3 3.4l5.7-6.8a40.3 40.3 0 0 1 5.1 5l-6.8 5.6s3.1 4.7 3.2 5.4l8.1-4a24.1 24.1 0 0 1 2.6 6.6l-8.8 2.4a25.2 25.2 0 0 1 1.1 6.2l9-.4a35.3 35.3 0 0 1-.4 7.1l-9-1.3s.1 2-1.5 6l8.4 3.3s-1.8 4.7-3.4 6.7l-7.6-4.9-23.4-15-29.1 22.7a39 39 0 0 1-3.9-6l8-4a31.4 31.4 0 0 1-2.3-5.9l-8.6 2.2a34.1 34.1 0 0 1-1.1-7l8.9-.6a48.2 48.2 0 0 1 .3-6.3l-8.8-1.5a41.5 41.5 0 0 1 1.9-7l8.4 3.3s2.1-5 2.8-5.6l-7.4-4.9a28.9 28.9 0 0 1 4.5-5.6l6.4 6.4a33.9 33.9 0 0 1 4.7-4z"
          transform="translate(-.1 .8)"
        />
        <path className="prefix__cls-4" d="M1105.1 242.8h105v504.73h-105z" />
        <text className="prefix__cls-18" transform="translate(1147.5 236)">
          {'FX'}
        </text>
        <text className="prefix__cls-19" transform="translate(1128.6 364.8)">
          {'REVERB'}
        </text>
        <text className="prefix__cls-19" transform="translate(1142.8 464.1)">
          <tspan className="prefix__cls-20">{'P'}</tspan>
          <tspan x={9.3} y={0}>
            {'AN'}
          </tspan>
        </text>
        <text className="prefix__cls-19" transform="translate(1118.4 562.1)">
          <tspan className="prefix__cls-21">{'L'}</tspan>
          <tspan x={7.1} y={0}>
            {'OW-'}
          </tspan>
          <tspan className="prefix__cls-20" x={39.3} y={0}>
            {'P'}
          </tspan>
          <tspan x={48.5} y={0}>
            {'ASS'}
          </tspan>
        </text>
        <text className="prefix__cls-19" transform="translate(1116.2 661.1)">
          {'HIGH-'}
          <tspan className="prefix__cls-20" x={43.6} y={0}>
            {'P'}
          </tspan>
          <tspan x={52.9} y={0}>
            {'ASS'}
          </tspan>
        </text>
        <text className="prefix__cls-19" transform="translate(1135.3 266.5)">
          {'DE'}
          <tspan className="prefix__cls-22" x={18.8} y={0}>
            {'L'}
          </tspan>
          <tspan className="prefix__cls-23" x={26.7} y={0}>
            {'A'}
          </tspan>
          <tspan x={35.4} y={0}>
            {'Y'}
          </tspan>
        </text>
        <text className="prefix__cls-24" transform="translate(1119.3 538.5)">
          {'L'}
        </text>
        <text className="prefix__cls-24" transform="translate(1188.6 538.5)">
          {'R'}
        </text>
        <text className="prefix__cls-24" transform="translate(1119.3 635.4)">
          {'0'}
        </text>
        <text className="prefix__cls-24" transform="translate(1188.6 635.4)">
          {'10'}
        </text>
        <text className="prefix__cls-24" transform="translate(1119.3 732.4)">
          {'0'}
        </text>
        <text className="prefix__cls-24" transform="translate(1188.6 732.4)">
          {'10'}
        </text>
        <text className="prefix__cls-24" transform="translate(1119.3 437.9)">
          {'0'}
        </text>
        <text className="prefix__cls-24" transform="translate(1188.6 437.9)">
          {'10'}
        </text>
        <text className="prefix__cls-24" transform="translate(1119.3 338.9)">
          {'0'}
        </text>
        <text className="prefix__cls-24" transform="translate(1188.6 338.9)">
          {'10'}
        </text>
        <g id="prefix__Pitch-2" data-name="Pitch">
          <path className="prefix__cls-10" d="M60.7 246.6h4.5v500.26h-4.5z" />
          <path className="prefix__cls-4" d="M18.7 245.3h84M14.2 746.8h84" />
          <text className="prefix__cls-5" transform="translate(35.9 235.1)">
            {'PITCH'}
          </text>
          <path
            className="prefix__cls-11"
            d="M95.5 370.9v3.6h-6.8v-3.6zM86 619.1h4.6v-4.6h3.1v4.6h4.6v3.1h-4.6v4.6h-3.1v-4.6H86z"
            transform="translate(-.1 .8)"
          />
          <path className="prefix__cls-4" d="M18.7 496.7h84" />
        </g>
        <path
          className="prefix__cls-25"
          d="M836.9 72.8v53h-9.3v-53a4.7 4.7 0 0 0-4.7-4.5h-27.7a4.5 4.5 0 0 0-4.5 4.5v53h-9.6v-53a4.6 4.6 0 0 0-4.5-4.5h-27.9a4.6 4.6 0 0 0-4.5 4.5v53h-9.6V58.9h88.3a13.8 13.8 0 0 1 14 13.9zM856.6 37v9.4h-9.4V37zm-9.4 21.9h9.4v66.9h-9.4zm86.8 0l-27.9 32.8 28 34.1h-12.5L899.8 99c-6.6 8.2-14.8 18.5-21.6 26.8h-12.5l27.9-34.1-27.9-32.8h12.5l21.6 25.4c6.5-7.7 15.1-17.7 21.8-25.4z"
          transform="translate(-.1 .8)"
        />
        <g className="prefix__cls-27" mask="url(#prefix__mask)">
          <path
            d="M836.9 72.8v53h-9.3v-53a4.7 4.7 0 0 0-4.7-4.5h-27.7a4.5 4.5 0 0 0-4.5 4.5v53h-9.6v-53a4.6 4.6 0 0 0-4.5-4.5h-27.9a4.6 4.6 0 0 0-4.5 4.5v53h-9.6V58.9h88.3a13.8 13.8 0 0 1 14 13.9zM856.6 37v9.4h-9.4V37zm-9.4 21.9h9.4v66.9h-9.4zm86.8 0l-27.9 32.8 28 34.1h-12.5L899.8 99c-6.6 8.2-14.8 18.5-21.6 26.8h-12.5l27.9-34.1-27.9-32.8h12.5l21.6 25.4c6.5-7.7 15.1-17.7 21.8-25.4z"
            transform="translate(-.1 .8)"
          />
        </g>
        <path
          className="prefix__cls-25"
          d="M972.2 59.9c-.9 5.4-1 9-1 19.6v50.6c0 10-2.7 17.6-8.4 23.4s-16 9.8-27.9 9.8-23.2-3.8-30-11.3c-3.6-3.9-5.3-6.9-8.1-14.2l23.7-8.2c2.6 9.5 6.2 12.9 14 12.9s11.9-4 11.9-12.4V79.6c0-10.3-.2-14.1-1-19.7zm37.2 68.2c.5 4.3 1.4 6.5 3.2 9s8 5.7 14.2 5.7c9.4 0 15-4.2 15-11a9.3 9.3 0 0 0-5.1-8.5c-2.6-1.2-5.6-2-18.3-5-11.1-2.4-15-3.8-19.5-7-7.7-5.3-11.8-13.5-11.8-23.3 0-18.7 15.1-30.5 39-30.5 15.4 0 27.2 4.7 33.8 13.8 3 4 4.5 7.7 6 14.6l-25.7 2.8c-1.5-7.9-5.8-11.2-15.1-11.2-7.4 0-12.9 4-12.9 9.6 0 3.4 1.9 6 5.8 7.8s2.4 1.1 16.7 4c9.2 2 15.1 4 19.7 6.9 8.7 5.5 13.1 13.6 13.1 24.8 0 9.1-2.9 16.9-8.5 22.4s-17.7 10.3-31.9 10.3c-10.4 0-20.6-2.2-27.1-6a28.3 28.3 0 0 1-13.1-15.5c-1.3-2.9-1.9-5.7-2.7-11.3z"
          transform="translate(-.1 .8)"
        />
        <g className="prefix__cls-27" mask="url(#prefix__mask-2)">
          <path
            d="M972.2 59.9c-.9 5.4-1 9-1 19.6v50.6c0 10-2.7 17.6-8.4 23.4s-16 9.8-27.9 9.8-23.2-3.8-30-11.3c-3.6-3.9-5.3-6.9-8.1-14.2l23.7-8.2c2.6 9.5 6.2 12.9 14 12.9s11.9-4 11.9-12.4V79.6c0-10.3-.2-14.1-1-19.7zm37.2 68.2c.5 4.3 1.4 6.5 3.2 9s8 5.7 14.2 5.7c9.4 0 15-4.2 15-11a9.3 9.3 0 0 0-5.1-8.5c-2.6-1.2-5.6-2-18.3-5-11.1-2.4-15-3.8-19.5-7-7.7-5.3-11.8-13.5-11.8-23.3 0-18.7 15.1-30.5 39-30.5 15.4 0 27.2 4.7 33.8 13.8 3 4 4.5 7.7 6 14.6l-25.7 2.8c-1.5-7.9-5.8-11.2-15.1-11.2-7.4 0-12.9 4-12.9 9.6 0 3.4 1.9 6 5.8 7.8s2.4 1.1 16.7 4c9.2 2 15.1 4 19.7 6.9 8.7 5.5 13.1 13.6 13.1 24.8 0 9.1-2.9 16.9-8.5 22.4s-17.7 10.3-31.9 10.3c-10.4 0-20.6-2.2-27.1-6a28.3 28.3 0 0 1-13.1-15.5c-1.3-2.9-1.9-5.7-2.7-11.3z"
            transform="translate(-.1 .8)"
          />
        </g>
      </g>
    </g>
  </svg>
)

export default SvgComponent