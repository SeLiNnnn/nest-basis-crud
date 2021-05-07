/**
 *  程序出Bug了？
 *        ∩∩
 *      （´･ω･）
 *     ＿| ⊃／(＿＿_
 *    ／ └-(＿＿＿／
 *    ￣￣￣￣￣￣￣
 *   算了反正不是我写的
 *      ⊂⌒／ヽ-、＿
 *    ／⊂_/＿＿＿＿ ／
 *    ￣￣￣￣￣￣￣
 * @Author: SeLiNnnn
 * @Description: Codes create the world.
 * @Date: 2021-04-09 11:00
 */
import { Schema } from "mongoose";

export const userSchema = new Schema({
  _id: { type: String, required: true },
  user_name: { type: String, required: true },
  password: { type: String, required: true }
});
