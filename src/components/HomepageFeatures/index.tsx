import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Giao diện thân thiện, dễ sử dụng',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Hệ thống thi trắc nghiệm được thiết kế tối giản, thân thiện với người dùng, 
        giúp học sinh, sinh viên dễ dàng tiếp cận và thực hiện bài thi một cách nhanh chóng.
      </>
    ),
  },
  {
    title: 'Tập trung vào kết quả và phân tích',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Hệ thống cung cấp báo cáo chi tiết về kết quả thi, phân tích điểm mạnh, yếu của từng thí sinh, 
        giúp nâng cao trải nghiệm học tập và tự đánh giá.
      </>
    ),
  },

  {
    title: 'Chấm điểm và phản hồi ngay lập tức',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Hệ thống cung cấp tính năng chấm điểm tự động ngay sau khi thí sinh nộp bài, 
        đưa ra phản hồi tức thì để học sinh có thể xem lại và cải thiện kết quả.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
