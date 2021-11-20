import styles from "@styles/layout/Auth.module.css";
import { FcGoogle } from "react-icons/fc";
import Head from "next/head";

export default function Login() {
  return (
    <div className={styles.main}>
      <Head>
        <title>Login</title>
      </Head>
      <div className={styles.container}>
        <div className={styles.titlearea}>
          <h1 className={styles.title}>Login</h1>
        </div>
        <div className={styles.information}>
          <div className={styles.login}>
            <div>
              <button className={styles.loginwithgoogle}>
                <FcGoogle size="1.5em" />
                {`Login with Google`}
              </button>
            </div>
            <div className={styles.centeronly}>or</div>
            <div>
              <input
                type="email"
                className={styles.input}
                placeholder="Email"
                required
              />
            </div>
            <div className={styles.gap}>
              <input
                type="password"
                className={styles.input}
                placeholder="Password" 
                required
              />
            </div>
            <div className={styles.rememberpassword}>
              <label class="remember password" className={styles.lablecenter +" " + styles.checkbox}>
                <input type="checkbox" className={styles.checkbox}/>
                {`Remember password`}
              </label>
              {/* //TODO: styles the checkbox */}
            </div>
          </div>
          <div className={styles.rightinformation}>
            <h1>
              This is a demo website. You can use this website to test the
            </h1>
            <p className={styles.textjustify}>
              {`When I was a little boy in elementary school, the neighborhood kids
            and I all looked forward to playing so many games in my backyard
            during the long summer holidays between grades. For instance, one of
            our favorite games was whiffle ball, a kid's version of baseball.
            All we needed was a cheap plastic bat and a cheap plastic ball and
            we could entertain ourselves in the backyard from morning to
            afternoon. Or if we broke the bat or lost the ball, we would play
            "Red Rover, Red Rover." To play this game, we would join hands in
            two opposing lines and hurl ourselves at the locked wrists of the
            opposing team, trying to break through their line. Once the sun set,
            our favorite game was hide-and-seek. My backyard was perfect because
            there were lots of bushes and trees where we could hide out of sight
            of the kid who was "it." Even on rainy days, we had fun activities
            out in the garden shed in the corner of the backyard. For instance,
            we would often act out our favorite TV game shows, like "Let's Make
            a Deal," or sing along to the theme song from "The Monkees," a
            popular TV show about a rock-and-roll band, on my little record
            player. Even now, fifty years later, I still look back on all those
            fun summertime games out in my backyard with a lot of fondness.`}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
