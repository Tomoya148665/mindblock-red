import type { NextPage } from "next";
import Image from "next/image";
import styles from "./styles.module.css";
import { useResponsiveBackgroundImage } from "../hooks/useResponsiveBackgroundImage";
import Description from "../components/Description";
import Secondpage from "../components/Secondpage";
import Finalpage from "../components/Finalpage";
import Firstpage from "../components/Firstpage";

const Desktop3: NextPage = () => {
  return (
    <>
      <div className="relative w-full flex flex-col  justify-center">
        <Firstpage
          name="直面する困難は、自分の能力不足のせいだ。"
          consicousnessLevel="進んで"
          conciousness="今のあなたは現状の課題に取り組んで、未来を変えていこうと努力していることでしょう。"
        />

        <Secondpage
          description="「自分がやりきれば必ずうまくいく」という念は全てを自己責任で解決しようとするパターンです。これは厳しい父親や常識的で保守的な母親の影響かもしれません。また、必ず成功しなければならないというプレッシャーを背負っており、自己に対する過剰な期待や理想を持っている可能性があります。この念が原因で状況が予期しない方向に進んだ時、不必要なストレスや焦りを感じてしまうかもしれません。成功が自分のコントロールだけで決まるわけではないので柔軟性を持ち、他者と協力することの大切さを学ぶべきです。"
          name="「自分がやり切ればうまくいく」"
        />

        <Description
          title="あなたのゴールや目標への影響"
          subtitle="～マインドブロックの弊害～"
          description={
            <p>
              1.リスクの過小評価と責任の過負荷**
              <br />
              <br />
              あなたの信じている「自分がやりきれば、必ずうまくいく」という考えは、実際のリスクを理解する上で障害になっています。
              INT」の性格傾向から、論理的かつ計画的に物事を進めるあなたにとって、全てをコントロールしようとするこの念は、予想外の障害や失敗に直面した時に大きなストレスとなり得ます。この念が原因で、事業の難題や日々の業務において無理をしてしまい、過剰な責任感からくる過労やストレスに繋がっているかもしれません。
              <br />
              <br />
              **2.チームワークと柔軟性の欠如**
              <br />
              <br />
              父親からの厳しい基準と、母親の常識的かつ保守的な価値観は、あなたが「自力での成功」を深くじるように影響を及ぼしている可能性があります。しかし、現実には、個人で全てを解決することは困難です。職場での資金調達やサービスの拡大など、他者との協力が必要な場面では、あなたのこの念が柔軟なチームワークを築くことを妨げ、目標を達成する過程で孤立する原因になっているかもしれません。
              <br />
              <br /> **3.自己認識と許容の欠如**
              <br />
              <br />
              ホーキンズ博士の理論における中性の意識レベルは、バランスを意味しますが、あなたの場合、自分がコントロールしきれない要素を受け入れることができていないかもしれません。完璧を求めるあまり、”もっと頑張れる”というプレッシャーが、目の前の仕事に集中しきれない原因になっています。また、過去の失恋や喧嘩の記憶が、今のあなたの努力すべき点とエネルギーの方向性を歪めている事象も想定されます。
              このマインドブロックを乗り越え、成功への道を歩むためには、事象に対する認識をアップデートし、自分だけでなく他人や環境とも調和を図る柔軟性が重要です。自身の念を見直し、成長への道を見つけてください。
            </p>
          }
          number="03"
        />

        <Description
          title="マインドブロックはいかに「幻」か"
          subtitle=""
          description={
            <p>
              「自分がやりきれば必ずうまくいく」という念は全てを自己責任で解決しようとするパターンです。これは厳しい父親や常識的で保守的な母親の影響かもしれません。また、必ず成功しなければならないというプレッシャーを背負っており、自己に対する過剰な期待や理想を持っている可能性があります。この念が原因で状況が予期しない方向に進んだ時、不必要なストレスや焦りを感じてしまうかもしれません。成功が自分のコントロールだけで決まるわけではないので柔軟性を持ち、他者と協力することの大切さを学ぶべきです。
              <br />
              <br />
              「自分がやりきれば必ずうまくいく」という念は全てを自己責任で解決しようとするパターンです。これは厳しい父親や常識的で保守的な母親の影響かもしれません。また、必ず成功しなければならないというプレッシャーを背負っており、自己に対する過剰な期待や理想を持っている可能性があります。この念が原因で状況が予期しない方向に進んだ時、不必要なストレスや焦りを感じてしまうかもしれません。成功が自分のコントロールだけで決まるわけではないので柔軟性を持ち、他者と協力することの大切さを学ぶべきです。
            </p>
          }
          number="04"
        />

        <Description
          title="マインドブロックの「原体験」とは"
          subtitle=""
          description={
            <p>
              「自分がやりきれば必ずうまくいく」という念は全てを自己責任で解決しようとするパターンです。これは厳しい父親や常識的で保守的な母親の影響かもしれません。また、必ず成功しなければならないというプレッシャーを背負っており、自己に対する過剰な期待や理想を持っている可能性があります。この念が原因で状況が予期しない方向に進んだ時、不必要なストレスや焦りを感じてしまうかもしれません。成功が自分のコントロールだけで決まるわけではないので柔軟性を持ち、他者と協力することの大切さを学ぶべきです。
              <br />
              <br />
              「自分がやりきれば必ずうまくいく」という念は全てを自己責任で解決しようとするパターンです。これは厳しい父親や常識的で保守的な母親の影響かもしれません。また、必ず成功しなければならないというプレッシャーを背負っており、自己に対する過剰な期待や理想を持っている可能性があります。この念が原因で状況が予期しない方向に進んだ時、不必要なストレスや焦りを感じてしまうかもしれません。成功が自分のコントロールだけで決まるわけではないので柔軟性を持ち、他者と協力することの大切さを学ぶべきです。
            </p>
          }
          number="05"
        />

        <Finalpage
          description="USERさんの信念「自分がやりきればうまくいく」という考えは、貴重な駆動力を与えてくれますが、実際には勘違いかもしれません。ちょっとした例話で考えてみましょう。
              想像してみてください、あなたは一人でポートを漕いでいます。どんなに強く前向きに潤いでも、川の流れや風の向きによってはなかなか進まないことがあります。これはつまり、あなたの努力だけではなく、周りの環境や他人の力、時には運も大きな役割を果たしているということです。
              あなたの家族背景からも、高い期待や厳格な標準に照らして自己評価をしている傾向があります。しかし、これは全てが自分の手の中にあるわけではないという真実を見落としている可能性があります。また、ご両親の期待を背負って育ってきたため、高い自
              日効力感を持ちつつも、それが現実と必ずしも一致しない相違を生み出す原因になっているのかもしれません。
              仕事においても、あなたひとりの努力だけでは解決しない局面があります。会社の資金調達やITサービスの売上拡大は、単独でなんとかできるものではないのです。チームや他部門、さらには市場の状況など、多くの要因が絡まっています。
              ですから、「自分がやりきればうまくいく」という信念は、修正が必要です。あなたの努力は大切ですが、より幸せで成功したいと思うなら、周囲の力を借りること、そして時には自分を許し、流れに身を任せることも大切だということを忘れないでください。
          "
        />
      </div>
    </>
  );
};

export default Desktop3;
