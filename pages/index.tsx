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
          description1={
            <p>
              「自分がやりきれば必ずうまくいく」という念は全てを自己責任で解決しようとするパターンです。これは厳しい父親や常識的で保守的な母親の影響かもしれません。また、必ず成功しなければならないというプレッシャーを背負っており、自己に対する過剰な期待や理想を持っている可能性があります。この念が原因で状況が予期しない方向に進んだ時、不必要なストレスや焦りを感じてしまうかもしれません。成功が自分のコントロールだけで決まるわけではないので柔軟性を持ち、他者と協力することの大切さを学ぶべきです。
              <br />
              <br />
              「自分がやりきれば必ずうまくいく」という念は全てを自己責任で解決しようとするパターンです。これは厳しい父親や常識的で保守的な母親の影響かもしれません。また、必ず成功しなければならないというプレッシャーを背負っており、自己に対する過剰な期待や理想を持っている可能性があります。この念が原因で状況が予期しない方向に進んだ時、不必要なストレスや焦りを感じてしまうかもしれません。成功が自分のコントロールだけで決まるわけではないので柔軟性を持ち、他者と協力することの大切さを学ぶべきです。
            </p>
          }
          description2="「自分がやりきれば必ずうまくいく」という念は全てを自己責任で解決しようとするパターンです。これは厳しい父親や常識的で保守的な母親の影響かもしれません。また、必ず成功しなければならないというプレッシャーを背負っており、自己に対する過剰な期待や理想を持っている可能性があります。この念が原因で状況が予期しない方向に進んだ時、不必要なストレスや焦りを感じてしまうかもしれません。成功が自分のコントロールだけで決まるわけではないので柔軟性を持ち、他者と協力することの大切さを学ぶべきです。
          "
          number="03"
        />

        <Description
          title="マインドブロックはいかに「幻」か"
          description1={
            <p>
              「自分がやりきれば必ずうまくいく」という念は全てを自己責任で解決しようとするパターンです。これは厳しい父親や常識的で保守的な母親の影響かもしれません。また、必ず成功しなければならないというプレッシャーを背負っており、自己に対する過剰な期待や理想を持っている可能性があります。この念が原因で状況が予期しない方向に進んだ時、不必要なストレスや焦りを感じてしまうかもしれません。成功が自分のコントロールだけで決まるわけではないので柔軟性を持ち、他者と協力することの大切さを学ぶべきです。
              <br />
              <br />
              「自分がやりきれば必ずうまくいく」という念は全てを自己責任で解決しようとするパターンです。これは厳しい父親や常識的で保守的な母親の影響かもしれません。また、必ず成功しなければならないというプレッシャーを背負っており、自己に対する過剰な期待や理想を持っている可能性があります。この念が原因で状況が予期しない方向に進んだ時、不必要なストレスや焦りを感じてしまうかもしれません。成功が自分のコントロールだけで決まるわけではないので柔軟性を持ち、他者と協力することの大切さを学ぶべきです。
            </p>
          }
          description2="「自分がやりきれば必ずうまくいく」という念は全てを自己責任で解決しようとするパターンです。これは厳しい父親や常識的で保守的な母親の影響かもしれません。また、必ず成功しなければならないというプレッシャーを背負っており、自己に対する過剰な期待や理想を持っている可能性があります。この念が原因で状況が予期しない方向に進んだ時、不必要なストレスや焦りを感じてしまうかもしれません。成功が自分のコントロールだけで決まるわけではないので柔軟性を持ち、他者と協力することの大切さを学ぶべきです。"
          number="04"
        />

        <Description
          title="マインドブロックの「原体験」とは"
          description1={
            <p>
              「自分がやりきれば必ずうまくいく」という念は全てを自己責任で解決しようとするパターンです。これは厳しい父親や常識的で保守的な母親の影響かもしれません。また、必ず成功しなければならないというプレッシャーを背負っており、自己に対する過剰な期待や理想を持っている可能性があります。この念が原因で状況が予期しない方向に進んだ時、不必要なストレスや焦りを感じてしまうかもしれません。成功が自分のコントロールだけで決まるわけではないので柔軟性を持ち、他者と協力することの大切さを学ぶべきです。
              <br />
              <br />
              「自分がやりきれば必ずうまくいく」という念は全てを自己責任で解決しようとするパターンです。これは厳しい父親や常識的で保守的な母親の影響かもしれません。また、必ず成功しなければならないというプレッシャーを背負っており、自己に対する過剰な期待や理想を持っている可能性があります。この念が原因で状況が予期しない方向に進んだ時、不必要なストレスや焦りを感じてしまうかもしれません。成功が自分のコントロールだけで決まるわけではないので柔軟性を持ち、他者と協力することの大切さを学ぶべきです。
            </p>
          }
          description2="「自分がやりきれば必ずうまくいく」という念は全てを自己責任で解決しようとするパターンです。これは厳しい父親や常識的で保守的な母親の影響かもしれません。また、必ず成功しなければならないというプレッシャーを背負っており、自己に対する過剰な期待や理想を持っている可能性があります。この念が原因で状況が予期しない方向に進んだ時、不必要なストレスや焦りを感じてしまうかもしれません。成功が自分のコントロールだけで決まるわけではないので柔軟性を持ち、他者と協力することの大切さを学ぶべきです。"
          number="05"
        />

        <Finalpage description="「自分がやりきれば必ずうまくいく」という念は全てを自己責任で解決しようとするパターンです。これは厳しい父親や常識的で保守的な母親の影響かもしれません。また、必ず成功しなければならないというプレッシャーを背負っており、自己に対する過剰な期待や理想を持っている可能性があります。この念が原因で状況が予期しない方向に進んだ時、不必要なストレスや焦りを感じてしまうかもしれません。成功が自分のコントロールだけで決まるわけではないので柔軟性を持ち、他者と協力することの大切さを学ぶべきです。" />
      </div>
    </>
  );
};

export default Desktop3;